import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import {
  IMAGE_EXTENSION,
  VIDEO_EXTENSION,
  FILE_EXTENSION,
  AUDIO_EXTENSION,
} from '../const/file/file_extension';

export default class FileAction {
  static getFileExtension(fileName) {
    return (
      fileName.substring(fileName.lastIndexOf('.'), fileName.length) || fileName
    );
  }

  static getFileType(fileExtension) {
    if (IMAGE_EXTENSION.includes(fileExtension)) {
      return 'image';
    }
    if (VIDEO_EXTENSION.includes(fileExtension)) {
      return 'video';
    }
    if (FILE_EXTENSION.includes(fileExtension)) {
      return 'document';
    }
    if (AUDIO_EXTENSION.includes(fileExtension)) {
      return 'audio';
    }
    return 'other file';
  }

  static addNewFile(file, addFile, setAddFile) {
    const FILE = [...addFile];
    const extensions = this.getFileExtension(file[0].name);
    const fileType = this.getFileType(extensions);
    const fileReader = new FileReader();

    fileReader.onload = () => {
      FILE.push({
        file: file[0],
        fileUrl: fileReader.result || null,
        fileType: fileType,
        fileName: file[0].name,
        fileSize: file[0].size,
      });
      setAddFile(FILE);
    };

    fileReader.readAsDataURL(file[0]);
  }

  static async sendingFiles(chatId, file, setAddFile) {
    const storage = getStorage();
    const files = [...file];

    for (let i = 0; i < file.length; i++) {
      let fileUrl;

      const fileRef = ref(
        storage,
        `chats/attachment/${chatId}/${file[i].fileType}/` + file[i].fileName
      );

      if (file) {
        await uploadBytes(fileRef, file[i].file, {
          contentType: file[i].file.type,
        });

        fileUrl = await getDownloadURL(fileRef);
        files[i].fileUrl = fileUrl;

        delete files[i].file;
      }
    }

    setAddFile([]);
    return files;
  }

  static async downloadFileFromStorage(fileUrl) {
    const storage = getStorage();
    const httpsReference = ref(storage, fileUrl);
    const URL = await getDownloadURL(ref(storage, httpsReference));

    document.location.href = URL;
  }
}
