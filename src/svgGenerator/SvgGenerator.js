import React from "react";

import "./SvgGenerator.css";

const SvgGenerator = (props) => {
    switch (props.id) {
        case "arrow-down":
            return (
                <svg
                    width="13px"
                    height="7px"
                    viewBox="0 0 13 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`arrow-down ${props.class}`}
                >
                    <path
                        d="M1.75 1.125L6.5 5.875L11.25 1.125"
                        stroke={props.stroke}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            );
        case "home":
            return (
                <svg
                    width="18px"
                    height="18px"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="home"
                >
                    <defs>
                        <linearGradient
                            id="gradient"
                            x1="6"
                            y1="4"
                            x2="18"
                            y2="19.5"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop offset="0" style={{ stopColor: "#7CB8F7" }} />
                            <stop offset="0.934101" style={{ stopColor: "#2A8BF2" }} />
                        </linearGradient>
                        <mask
                            id="home-mask"
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="18"
                            height="18"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M12 16V12H16L16.001 16H12ZM16 10H12C10.897 10 10 10.897 10 12V16C10 17.103 10.897 18 12 18H16C17.103 18 18 17.103 18 16V12C18 10.897 17.103 10 16 10ZM2 16V12H6L6.001 16H2ZM6 10H2C0.897 10 0 10.897 0 12V16C0 17.103 0.897 18 2 18H6C7.103 18 8 17.103 8 16V12C8 10.897 7.103 10 6 10ZM12 6V2H16L16.001 6H12ZM16 0H12C10.897 0 10 0.897 10 2V6C10 7.103 10.897 8 12 8H16C17.103 8 18 7.103 18 6V2C18 0.897 17.103 0 16 0ZM2 6V2H6L6.001 6H2ZM6 0H2C0.897 0 0 0.897 0 2V6C0 7.103 0.897 8 2 8H6C7.103 8 8 7.103 8 6V2C8 0.897 7.103 0 6 0Z"
                                fill="white"
                            />
                        </mask>
                    </defs>
                    <g mask="url(#home-mask)">
                        <rect x="0" y="0" width="18" height="18" fill="#707C97" />
                        <rect
                            className="gradient"
                            x="0"
                            y="0"
                            width="18"
                            height="18"
                            fill="url(#gradient)"
                        />
                    </g>
                </svg>
            );
        case "chat":
            return (
                <svg
                    width="22px"
                    height="22px"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="chat"
                >
                    <defs>
                        <linearGradient
                            id="gradient"
                            x1="6"
                            y1="4"
                            x2="18"
                            y2="19.5"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop offset="0" style={{ stopColor: "#7CB8F7" }} />
                            <stop offset="0.934101" style={{ stopColor: "#2A8BF2" }} />
                        </linearGradient>
                        <mask
                            id="chat-mask"
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="22"
                            height="22"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M14.9996 11.9992C14.4476 11.9992 13.9996 11.5512 13.9996 10.9992C13.9996 10.4472 14.4476 9.99917 14.9996 9.99917C15.5516 9.99917 15.9996 10.4472 15.9996 10.9992C15.9996 11.5512 15.5516 11.9992 14.9996 11.9992ZM10.9996 11.9992C10.4476 11.9992 9.99961 11.5512 9.99961 10.9992C9.99961 10.4472 10.4476 9.99917 10.9996 9.99917C11.5516 9.99917 11.9996 10.4472 11.9996 10.9992C11.9996 11.5512 11.5516 11.9992 10.9996 11.9992ZM6.99961 11.9992C6.44761 11.9992 5.99961 11.5512 5.99961 10.9992C5.99961 10.4472 6.44761 9.99917 6.99961 9.99917C7.55161 9.99917 7.99961 10.4472 7.99961 10.9992C7.99961 11.5512 7.55161 11.9992 6.99961 11.9992ZM18.0706 3.92817C15.7866 1.64417 12.6256 0.625171 9.39661 1.12417C5.31961 1.76017 1.93961 5.04417 1.17661 9.11117C0.809608 11.0692 1.02061 13.0632 1.78761 14.8762C1.88561 15.1062 1.91561 15.3222 1.87661 15.5152L1.01961 19.8032C0.953608 20.1312 1.05661 20.4702 1.29261 20.7062C1.48161 20.8952 1.73661 20.9992 1.99961 20.9992C2.06461 20.9992 2.13061 20.9932 2.19561 20.9792L6.47861 20.1232C6.72461 20.0762 6.96361 20.1452 7.12261 20.2112C8.93661 20.9782 10.9306 21.1882 12.8876 20.8222C16.9546 20.0592 20.2386 16.6792 20.8746 12.6022C21.3776 9.37417 20.3556 6.21317 18.0706 3.92817Z"
                                fill="white"
                            />
                        </mask>
                    </defs>
                    <g mask="url(#chat-mask)">
                        <rect x="0" y="0" width="22" height="22" fill="#707C97" />
                        <rect
                            className="gradient"
                            x="0"
                            y="0"
                            width="22"
                            height="22"
                            fill="url(#gradient)"
                        />
                    </g>
                </svg>
            );
        case "contact":
            return (
                <svg
                    width="14px"
                    height="18px"
                    viewBox="0 0 14 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="contact"
                >
                    <defs>
                        <linearGradient
                            id="gradient"
                            x1="6"
                            y1="4"
                            x2="18"
                            y2="19.5"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop offset="0" style={{ stopColor: "#7CB8F7" }} />
                            <stop offset="0.934101" style={{ stopColor: "#2A8BF2" }} />
                        </linearGradient>
                        <mask
                            id="contact-mask"
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="14"
                            height="18"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M9 4C9 2.897 8.103 2 7 2C5.897 2 5 2.897 5 4C5 5.103 5.897 6 7 6C8.103 6 9 5.103 9 4ZM11 4C11 6.206 9.206 8 7 8C4.794 8 3 6.206 3 4C3 1.794 4.794 0 7 0C9.206 0 11 1.794 11 4ZM0 17C0 13.14 3.141 10 7 10C10.859 10 14 13.14 14 17C14 17.552 13.553 18 13 18C12.447 18 12 17.552 12 17C12 14.243 9.757 12 7 12C4.243 12 2 14.243 2 17C2 17.552 1.553 18 1 18C0.447 18 0 17.552 0 17Z"
                                fill="white"
                            />
                        </mask>
                    </defs>
                    <g mask="url(#contact-mask)">
                        <rect x="0" y="0" width="14" height="18" fill="#707C97" />
                        <rect
                            className="gradient"
                            x="0"
                            y="0"
                            width="14"
                            height="18"
                            fill="url(#gradient)"
                        />
                    </g>
                </svg>
            );
        case "notifications":
            return (
                <svg
                    width="18px"
                    height="20px"
                    viewBox="0 0 18 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="notifications"
                >
                    <defs>
                        <linearGradient
                            id="gradient"
                            x1="6"
                            y1="4"
                            x2="18"
                            y2="19.5"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop offset="0" style={{ stopColor: "#7CB8F7" }} />
                            <stop offset="0.934101" style={{ stopColor: "#2A8BF2" }} />
                        </linearGradient>
                        <mask
                            id="notifications-mask"
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="18"
                            height="20"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M2.5146 14L3.6946 12.818C4.0726 12.44 4.2806 11.938 4.2806 11.404V6.72702C4.2806 5.37002 4.8706 4.07302 5.9006 3.17102C6.9386 2.26102 8.2606 1.86102 9.6376 2.04202C11.9646 2.35102 13.7196 4.45502 13.7196 6.93702V11.404C13.7196 11.938 13.9276 12.44 14.3046 12.817L15.4856 14H2.5146ZM10.9996 16.341C10.9996 17.24 10.0836 18 8.9996 18C7.9156 18 6.9996 17.24 6.9996 16.341V16H10.9996V16.341ZM17.5206 13.208L15.7196 11.404V6.93702C15.7196 3.45602 13.2176 0.499016 9.8996 0.0600164C7.9776 -0.195984 6.0376 0.391016 4.5826 1.66702C3.1186 2.94902 2.2806 4.79302 2.2806 6.72702L2.2796 11.404L0.478603 13.208C0.0096029 13.678 -0.129397 14.377 0.124603 14.99C0.379603 15.604 0.972603 16 1.6366 16H4.9996V16.341C4.9996 18.359 6.7936 20 8.9996 20C11.2056 20 12.9996 18.359 12.9996 16.341V16H16.3626C17.0266 16 17.6186 15.604 17.8726 14.991C18.1276 14.377 17.9896 13.677 17.5206 13.208Z"
                                fill="white"
                            />
                        </mask>
                    </defs>
                    <g mask="url(#notifications-mask)">
                        <rect x="0" y="0" width="18" height="20" fill="#707C97" />
                        <rect
                            className="gradient"
                            x="0"
                            y="0"
                            width="18"
                            height="20"
                            fill="url(#gradient)"
                        />
                    </g>
                </svg>
            );
        case "calendar":
            return (
                <svg
                    width="18px"
                    height="20px"
                    viewBox="0 0 18 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="calendar"
                >
                    <defs>
                        <linearGradient
                            id="gradient"
                            x1="6"
                            y1="4"
                            x2="18"
                            y2="19.5"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop offset="0" style={{ stopColor: "#7CB8F7" }} />
                            <stop offset="0.934101" style={{ stopColor: "#2A8BF2" }} />
                        </linearGradient>
                        <mask
                            id="calendar-mask"
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="18"
                            height="20"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M4 14C4 13.45 4.45 13 5 13C5.55 13 6 13.45 6 14C6 14.55 5.55 15 5 15C4.45 15 4 14.55 4 14ZM9 13H13C13.55 13 14 13.45 14 14C14 14.55 13.55 15 13 15H9C8.45 15 8 14.55 8 14C8 13.45 8.45 13 9 13ZM15 18H3C2.449 18 2 17.551 2 17V11H16V17C16 17.551 15.551 18 15 18ZM3 4H4V5C4 5.55 4.45 6 5 6C5.55 6 6 5.55 6 5V4H12V5C12 5.55 12.45 6 13 6C13.55 6 14 5.55 14 5V4H15C15.551 4 16 4.449 16 5V9H2V5C2 4.449 2.449 4 3 4ZM15 2H14V1C14 0.45 13.55 0 13 0C12.45 0 12 0.45 12 1V2H6V1C6 0.45 5.55 0 5 0C4.45 0 4 0.45 4 1V2H3C1.346 2 0 3.346 0 5V17C0 18.654 1.346 20 3 20H15C16.654 20 18 18.654 18 17V5C18 3.346 16.654 2 15 2Z"
                                fill="white"
                            />
                        </mask>
                    </defs>
                    <g mask="url(#calendar-mask)">
                        <rect x="0" y="0" width="18" height="20" fill="#707C97" />
                        <rect
                            className="gradient"
                            x="0"
                            y="0"
                            width="18"
                            height="20"
                            fill="url(#gradient)"
                        />
                    </g>
                </svg>
            );
        case "settings":
            return (
                <svg
                    width="20px"
                    height="20px"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="settings"
                >
                    <defs>
                        <linearGradient
                            id="gradient"
                            x1="6"
                            y1="4"
                            x2="18"
                            y2="19.5"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop offset="0" style={{ stopColor: "#7CB8F7" }} />
                            <stop offset="0.934101" style={{ stopColor: "#2A8BF2" }} />
                        </linearGradient>
                        <mask
                            id="settings-mask"
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="20"
                            height="20"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M9.37451 18H10.6255V17.233C10.6255 16.298 11.2005 15.458 12.0895 15.091C13.0095 14.708 14.0145 14.896 14.6765 15.562L15.2155 16.103L16.1035 15.215L15.5585 14.671C14.8955 14.009 14.7085 13.005 15.0815 12.114C15.0815 12.114 15.0825 12.113 15.0825 12.112L15.0935 12.084C15.4575 11.201 16.2985 10.625 17.2335 10.625H17.9995V9.375H17.2335C16.2985 9.375 15.4575 8.8 15.0915 7.911C14.7065 6.991 14.8955 5.986 15.5615 5.323L16.1025 4.784L15.2155 3.897L14.6705 4.442C14.0085 5.104 13.0055 5.291 12.1145 4.919C11.2015 4.542 10.6255 3.702 10.6255 2.767V2H9.37451V2.767C9.37451 3.702 8.79951 4.542 7.91051 4.909C6.99151 5.294 5.98651 5.105 5.32351 4.438L4.78451 3.897L3.89651 4.785L4.44151 5.329C5.10351 5.991 5.29151 6.995 4.91851 7.886C4.54251 8.799 3.70151 9.375 2.76651 9.375H1.99951V10.625H2.76651C3.70151 10.625 4.54251 11.2 4.90851 12.089C5.29351 13.009 5.10451 14.014 4.43851 14.677L3.89751 15.216L4.78451 16.103L5.32951 15.558C5.99151 14.896 6.99451 14.709 7.88551 15.081C8.79851 15.458 9.37451 16.298 9.37451 17.233V18ZM10.9425 20H9.05051C8.12651 20 7.37451 19.248 7.37451 18.324V17.233C7.37451 17.086 7.25751 16.985 7.14751 16.94C7.00351 16.881 6.84951 16.869 6.74351 16.972L5.97351 17.743C5.31751 18.397 4.25151 18.399 3.59651 17.743L2.25651 16.403C1.93851 16.085 1.76451 15.663 1.76451 15.213C1.76551 14.764 1.94051 14.342 2.25951 14.024L3.02751 13.259C3.13251 13.154 3.12151 13 3.07451 12.889C3.01451 12.742 2.91451 12.625 2.76651 12.625H1.68251C0.754512 12.625 -0.000488281 11.871 -0.000488281 10.943V9.051C-0.000488281 8.126 0.751512 7.375 1.67651 7.375H2.76651C2.91351 7.375 3.01451 7.257 3.05951 7.147C3.11951 7.003 3.13151 6.848 3.02751 6.744L2.25651 5.974C1.60251 5.317 1.60251 4.251 2.25651 3.597L3.59651 2.257C3.91451 1.939 4.33551 1.765 4.78451 1.765H4.78651C5.23551 1.765 5.65851 1.94 5.97551 2.259L6.74051 3.028C6.84551 3.134 7.00051 3.122 7.11151 3.075C7.25751 3.014 7.37451 2.914 7.37451 2.767V1.683C7.37451 0.755 8.12951 0 9.05751 0H10.9495C11.8735 0 12.6255 0.752 12.6255 1.676V2.767C12.6255 2.914 12.7425 3.015 12.8525 3.06C12.9975 3.12 13.1515 3.133 13.2565 3.028L14.0265 2.257C14.6825 1.603 15.7485 1.601 16.4035 2.257L17.7445 3.598C18.0625 3.915 18.2365 4.337 18.2355 4.787C18.2355 5.235 18.0605 5.658 17.7415 5.975L16.9725 6.741C16.8675 6.846 16.8785 7 16.9255 7.111C16.9855 7.258 17.0855 7.375 17.2335 7.375H18.3175C19.2455 7.375 19.9995 8.129 19.9995 9.057V10.949C19.9995 11.874 19.2485 12.625 18.3235 12.625H17.2335C17.0865 12.625 16.9855 12.743 16.9405 12.853C16.9395 12.854 16.9275 12.884 16.9265 12.886C16.8805 12.997 16.8685 13.152 16.9725 13.256L17.7435 14.026C18.3975 14.683 18.3975 15.749 17.7435 16.403L16.4035 17.743C16.0855 18.061 15.6645 18.235 15.2155 18.235H15.2135C14.7645 18.235 14.3415 18.06 14.0245 17.741L13.2595 16.972C13.1545 16.867 12.9985 16.879 12.8885 16.925C12.7425 16.986 12.6255 17.086 12.6255 17.233V18.317C12.6255 19.245 11.8705 20 10.9425 20ZM10 8.5C9.17301 8.5 8.50001 9.173 8.50001 10C8.50001 10.827 9.17301 11.5 10 11.5C10.827 11.5 11.5 10.827 11.5 10C11.5 9.173 10.827 8.5 10 8.5ZM10 13.5C8.07001 13.5 6.50001 11.93 6.50001 10C6.50001 8.07 8.07001 6.5 10 6.5C11.93 6.5 13.5 8.07 13.5 10C13.5 11.93 11.93 13.5 10 13.5Z"
                                fill="white"
                            />
                        </mask>
                    </defs>
                    <g mask="url(#settings-mask)">
                        <rect x="0" y="0" width="20" height="20" fill="#707C97" />
                        <rect
                            className="gradient"
                            x="0"
                            y="0"
                            width="20"
                            height="20"
                            fill="url(#gradient)"
                        />
                    </g>
                </svg>
            );
        case "logout":
            return (
                <svg
                    width="20px"
                    height="21px"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="logout"
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M11 11C11 11.553 10.552 12 10 12C9.44801 12 9.00001 11.553 9.00001 11V1C9.00001 0.447 9.44801 0 10 0C10.552 0 11 0.447 11 1V11ZM13.2389 2.5413C13.4919 2.0503 14.0959 1.8593 14.5859 2.1113C17.9249 3.8383 19.9999 7.2433 19.9999 11.0003C19.9999 16.5133 15.5139 21.0003 9.99991 21.0003C4.48591 21.0003 -9.15527e-05 16.5133 -9.15527e-05 11.0003C-9.15527e-05 7.2433 2.07491 3.8383 5.41491 2.1113C5.90391 1.8583 6.50791 2.0493 6.76191 2.5413C7.01591 3.0313 6.82291 3.6343 6.33291 3.8883C3.65991 5.2693 1.99991 7.9943 1.99991 11.0003C1.99991 15.4113 5.58891 19.0003 9.99991 19.0003C14.4109 19.0003 17.9999 15.4113 17.9999 11.0003C17.9999 7.9943 16.3399 5.2693 13.6679 3.8883C13.1769 3.6343 12.9849 3.0313 13.2389 2.5413Z"
                        fill="#707C97"
                    />
                </svg>
            );
        case "plus":
            return (
                <svg
                    width="16px"
                    height="16px"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`plus ${props.class}`}
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M15 7H9V1C9 0.447 8.552 0 8 0C7.448 0 7 0.447 7 1V7H1C0.448 7 0 7.447 0 8C0 8.553 0.448 9 1 9H7V15C7 15.553 7.448 16 8 16C8.552 16 9 15.553 9 15V9H15C15.552 9 16 8.553 16 8C16 7.447 15.552 7 15 7Z"
                        fill="#ffffff"
                    />
                </svg>
            );
        case "search":
            return (
                <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="search"
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M2 8C2 4.691 4.691 2 8 2C11.309 2 14 4.691 14 8C14 11.309 11.309 14 8 14C4.691 14 2 11.309 2 8ZM17.707 16.293L14.312 12.897C15.365 11.543 16 9.846 16 8C16 3.589 12.411 0 8 0C3.589 0 0 3.589 0 8C0 12.411 3.589 16 8 16C9.846 16 11.543 15.365 12.897 14.312L16.293 17.707C16.488 17.902 16.744 18 17 18C17.256 18 17.512 17.902 17.707 17.707C18.098 17.316 18.098 16.684 17.707 16.293Z"
                        fill="#707c97"
                    />
                </svg>
            );
        case "writes":
            return (
                <svg
                    width="15px"
                    height="5px"
                    viewBox="0 0 15 5"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="writes"
                >
                    <circle
                        cx="1.5"
                        cy="3.5"
                        r="1.5"
                        fill="#2A8BF2"
                        className="svg-elem-1"
                    ></circle>
                    <circle
                        cx="7.5"
                        cy="1.5"
                        r="1.5"
                        fill="#2A8BF2"
                        className="svg-elem-2"
                    ></circle>
                    <circle
                        cx="13.5"
                        cy="3.5"
                        r="1.5"
                        fill="#2A8BF2"
                        className="svg-elem-3"
                    ></circle>
                </svg>
            );
        case "voice":
            return (
                <svg
                    width="10px"
                    height="12px"
                    viewBox="0 0 10 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="voice"
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5 1.33335C4.35658 1.33335 3.83333 1.8566 3.83333 2.50002V5.41669C3.83333 6.0601 4.35658 6.58335 5 6.58335C5.64342 6.58335 6.16667 6.0601 6.16667 5.41669V2.50002C6.16667 1.8566 5.64342 1.33335 5 1.33335ZM7.33334 5.41669C7.33334 6.70352 6.28684 7.75002 5 7.75002C3.71317 7.75002 2.66667 6.70352 2.66667 5.41669V2.50002C2.66667 1.21319 3.71317 0.166687 5 0.166687C6.28684 0.166687 7.33334 1.21319 7.33334 2.50002V5.41669ZM8.5 4.83335C8.82259 4.83335 9.08334 5.09469 9.08334 5.41669C9.08334 7.47002 7.55909 9.16869 5.58334 9.45335V10.6667H6.81125C7.09884 10.6667 7.33334 10.9012 7.33334 11.1888V11.3113C7.33334 11.5989 7.09884 11.8334 6.81125 11.8334H3.18875C2.90117 11.8334 2.66667 11.5989 2.66667 11.3113V11.1888C2.66667 10.9012 2.90117 10.6667 3.18875 10.6667H4.41667V9.45335C2.44092 9.16869 0.916668 7.47002 0.916668 5.41669C0.916668 5.09469 1.17742 4.83335 1.5 4.83335C1.82258 4.83335 2.08333 5.09469 2.08333 5.41669C2.08333 7.02494 3.39175 8.33335 5 8.33335C6.60825 8.33335 7.91667 7.02494 7.91667 5.41669C7.91667 5.09469 8.17742 4.83335 8.5 4.83335Z"
                        fill="#707C97"
                    />
                </svg>
            );
        case "recording-voice":
            return (
                <svg
                    width="16px"
                    height="16px"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="recording-voice"
                >
                    <circle
                        cx="8"
                        cy="8"
                        r="8"
                        fill="#2A8BF2"
                        fillOpacity="0.25"
                        className="recording-voice__animated2"
                    />
                    <circle
                        cx="8"
                        cy="8"
                        r="2"
                        fill="#2A8BF2"
                        className="recording-voice__animated1"
                    />
                </svg>
            );
        case "files":
            return (
                <svg
                    width="14px"
                    height="18px"
                    viewBox="0 0 14 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="file"
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M7 10.6667H4.5C4.04 10.6667 3.66667 10.2934 3.66667 9.83335C3.66667 9.37335 4.04 9.00002 4.5 9.00002H7C7.46 9.00002 7.83333 9.37335 7.83333 9.83335C7.83333 10.2934 7.46 10.6667 7 10.6667ZM3.66667 13.1667C3.66667 12.7067 4.04 12.3334 4.5 12.3334H9.5C9.96083 12.3334 10.3333 12.7067 10.3333 13.1667C10.3333 13.6267 9.96083 14 9.5 14H4.5C4.04 14 3.66667 13.6267 3.66667 13.1667ZM11.5369 15.6667H2.46276C2.20776 15.6667 2.00026 15.48 2.00026 15.25V2.75002C2.00026 2.52002 2.20776 2.33335 2.46276 2.33335H7.00026V4.95835C7.00026 6.26835 8.01442 7.33335 9.26192 7.33335H12.0003V15.25C12.0003 15.48 11.7928 15.6667 11.5369 15.6667ZM8.66692 3.14835L10.9519 5.66668H9.26192C8.93359 5.66668 8.66692 5.34918 8.66692 4.95835V3.14835ZM13.4503 5.94002L8.91359 0.94002C8.75526 0.765854 8.53193 0.666687 8.29609 0.666687H2.46276C1.28859 0.666687 0.333591 1.60169 0.333591 2.75002V15.25C0.333591 16.3984 1.28859 17.3334 2.46276 17.3334H11.5369C12.7111 17.3334 13.6669 16.3984 13.6669 15.25V6.50002C13.6669 6.29252 13.5894 6.09335 13.4503 5.94002Z"
                        fill="#2A8BF2"
                    />
                </svg>
            );
        case "photo":
            return (
                <svg
                    width="16px"
                    height="16px"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="photo"
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4.66667 6.33333C5.35667 6.33333 5.91667 5.77333 5.91667 5.08333C5.91667 4.39333 5.35667 3.83333 4.66667 3.83333C3.97667 3.83333 3.41667 4.39333 3.41667 5.08333C3.41667 5.77333 3.97667 6.33333 4.66667 6.33333ZM13 13.8333H3.4675L9.305 8.96249C9.51 8.78833 9.88167 8.78916 10.0825 8.96166L13.8333 12.1617V13C13.8333 13.46 13.46 13.8333 13 13.8333ZM3 2.16667H13C13.46 2.16667 13.8333 2.54 13.8333 3V9.97L11.1642 7.69333C10.3392 6.99167 9.04833 6.99167 8.23083 7.68833L2.16667 12.7483V3C2.16667 2.54 2.54 2.16667 3 2.16667ZM13 0.5H3C1.62167 0.5 0.5 1.62167 0.5 3V13C0.5 14.3783 1.62167 15.5 3 15.5H13C14.3783 15.5 15.5 14.3783 15.5 13V3C15.5 1.62167 14.3783 0.5 13 0.5Z"
                        fill="#FF3366"
                    />
                </svg>
            );
        case "clip":
            return (
                <svg
                    width="20px"
                    height="21px"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="clip"
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M7.46071 20.7161C5.71119 20.7161 4.04831 20.0114 2.77843 18.7322C0.255577 16.1897 0.152043 12.1585 2.54706 9.74501L10.3502 1.88359C11.1626 1.06465 12.2592 0.612854 13.4372 0.612854C14.6975 0.612854 15.8956 1.11967 16.8094 2.04018C18.6276 3.87169 18.6973 6.78243 16.9637 8.52823L9.15106 16.3886C8.64501 16.8996 7.96359 17.18 7.23251 17.18C6.46023 17.18 5.7281 16.8711 5.17239 16.3114C4.05993 15.1888 4.02506 13.3996 5.09527 12.3203L12.3057 5.06731C12.7177 4.65254 13.3854 4.65043 13.7995 5.06307C14.2126 5.47572 14.2147 6.14547 13.8027 6.55918L6.59334 13.8133C6.33979 14.0693 6.37466 14.5211 6.67152 14.8195C6.82577 14.975 7.03072 15.0639 7.23251 15.0639C7.34872 15.0639 7.51564 15.0353 7.65298 14.8967L15.4656 7.03636C16.3815 6.11267 16.3129 4.54145 15.3113 3.53205C14.3531 2.5671 12.7272 2.49092 11.8482 3.37546L4.04514 11.2369C2.46677 12.8272 2.5703 15.521 4.27756 17.2403C5.14704 18.1175 6.27746 18.5999 7.46071 18.5999C8.51823 18.5999 9.49864 18.2 10.2192 17.4742L18.0233 9.61275C18.4343 9.19905 19.103 9.19587 19.5172 9.60852C19.9302 10.0212 19.9323 10.6899 19.5214 11.1046L11.7172 18.966C10.5974 20.0939 9.08556 20.7161 7.46071 20.7161Z"
                        fill="#707C97"
                    />
                </svg>
            );
        case "dots":
            return (
                <svg
                    width="5px"
                    height="20px"
                    viewBox="0 0 5 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="dots"
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M2.38589 4.90322C3.55223 4.90322 4.49883 3.95519 4.49883 2.78709C4.49883 1.61899 3.55223 0.670959 2.38589 0.670959C1.21955 0.670959 0.272949 1.61899 0.272949 2.78709C0.272949 3.95519 1.21955 4.90322 2.38589 4.90322ZM2.38589 8.07741C1.21955 8.07741 0.272949 9.02544 0.272949 10.1935C0.272949 11.3616 1.21955 12.3097 2.38589 12.3097C3.55223 12.3097 4.49883 11.3616 4.49883 10.1935C4.49883 9.02544 3.55223 8.07741 2.38589 8.07741ZM0.272949 17.6C0.272949 16.4319 1.21955 15.4839 2.38589 15.4839C3.55223 15.4839 4.49883 16.4319 4.49883 17.6C4.49883 18.7681 3.55223 19.7161 2.38589 19.7161C1.21955 19.7161 0.272949 18.7681 0.272949 17.6Z"
                        fill="#707C97"
                    />
                </svg>
            );
        case "file-add":
            return (
                <svg
                    width="17px"
                    height="22px"
                    viewBox="0 0 17 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="file-add"
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M14.2694 19.4258H2.76551C2.44223 19.4258 2.17916 19.1888 2.17916 18.8967V3.02578C2.17916 2.73375 2.44223 2.49674 2.76551 2.49674H7.46152V6.88771C7.46152 8.55099 8.74724 9.9032 10.3288 9.9032H14.8568V18.8967C14.8568 19.1888 14.5927 19.4258 14.2694 19.4258ZM14.486 7.78707H10.3288C9.91253 7.78707 9.57446 7.38394 9.57446 6.88771V2.49674H9.69278L14.486 7.78707ZM16.6951 7.07605L10.9436 0.72766C10.744 0.506525 10.4598 0.380615 10.1608 0.380615H2.76551C1.27694 0.380615 0.0662231 1.56776 0.0662231 3.02578V18.8967C0.0662231 20.3548 1.27694 21.5419 2.76551 21.5419H14.2694C15.758 21.5419 16.9698 20.3548 16.9698 18.8967V7.78707C16.9698 7.52361 16.8715 7.27073 16.6951 7.07605Z"
                        fill="white"
                    />
                </svg>
            );
        case "photo-add":
            return (
                <svg
                    width="20px"
                    height="20px"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="photo-add"
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.29181 7.94197C6.16657 7.94197 6.87652 7.23096 6.87652 6.35488C6.87652 5.4788 6.16657 4.76778 5.29181 4.76778C4.41706 4.76778 3.70711 5.4788 3.70711 6.35488C3.70711 7.23096 4.41706 7.94197 5.29181 7.94197ZM15.8565 17.4646H3.77155L11.1721 11.2802C11.432 11.059 11.9032 11.0601 12.1578 11.2791L16.913 15.3421V16.4065C16.913 16.9905 16.4397 17.4646 15.8565 17.4646ZM3.17887 2.65165H15.8565C16.4397 2.65165 16.913 3.12566 16.913 3.70972V12.5594L13.5291 9.66874C12.4832 8.77785 10.8467 8.77785 9.81034 9.66239L2.1224 16.087V3.70972C2.1224 3.12566 2.5957 2.65165 3.17887 2.65165ZM15.8565 0.535522H3.17887C1.43147 0.535522 0.00946045 1.95968 0.00946045 3.70972V16.4065C0.00946045 18.1565 1.43147 19.5807 3.17887 19.5807H15.8565C17.6039 19.5807 19.0259 18.1565 19.0259 16.4065V3.70972C19.0259 1.95968 17.6039 0.535522 15.8565 0.535522Z"
                        fill="white"
                    />
                </svg>
            );
        case "video-add":
            return (
                <svg
                    width="20px"
                    height="20px"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="video-add"
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M16.913 16.7739C16.913 17.2077 16.5601 17.5611 16.127 17.5611H14.8V15.445H16.913V16.7739ZM2.1224 16.7739V15.445H4.23534V17.5611H2.90842C2.47526 17.5611 2.1224 17.2077 2.1224 16.7739ZM2.90842 2.74821H4.23534V4.86434H2.1224V3.53541C2.1224 3.1016 2.47526 2.74821 2.90842 2.74821ZM16.913 3.53541V4.86434H14.8V2.74821H16.127C16.5601 2.74821 16.913 3.1016 16.913 3.53541ZM14.8 13.3289H16.913V11.2127H14.8V13.3289ZM14.8 9.0966H16.913V6.98047H14.8V9.0966ZM6.34828 17.5611H12.6871V2.74821H6.34828V17.5611ZM2.1224 13.3289H4.23534V11.2127H2.1224V13.3289ZM2.1224 9.0966H4.23534V6.98047H2.1224V9.0966ZM16.127 0.63208H2.90842C1.30998 0.63208 0.00946045 1.93562 0.00946045 3.53541V16.7739C0.00946045 18.3748 1.30998 19.6772 2.90842 19.6772H16.127C17.7254 19.6772 19.0259 18.3748 19.0259 16.7739V3.53541C19.0259 1.93562 17.7254 0.63208 16.127 0.63208Z"
                        fill="white"
                    />
                </svg>
            );
        case "send":
            return (
                <svg
                    width="17px"
                    height="16px"
                    viewBox="0 0 17 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="send"
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M10.9499 15.914C10.9315 15.914 10.9139 15.9131 10.8962 15.9123C10.4983 15.8884 10.1664 15.5992 10.0872 15.2078L8.73312 8.53578C8.66269 8.18838 8.39241 7.91769 8.04554 7.84716L1.38361 6.49019C0.992713 6.41171 0.703944 6.07931 0.680174 5.68077C0.656403 5.28135 0.902033 4.91632 1.2806 4.79111L15.3669 0.0888971C15.6829 -0.0186728 16.0316 0.0642089 16.2675 0.301392C16.5035 0.537693 16.5853 0.886854 16.4806 1.20339L11.7846 15.3109C11.6648 15.6733 11.3268 15.914 10.9499 15.914Z"
                        fill="#ffffff"
                    />
                </svg>
            );
        case "smile":
            return (
                <svg
                    width="26px"
                    height="26px"
                    viewBox="0 0 26 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="smile"
                >
                    <path
                        d="M24.296 13.0968C24.296 19.4205 19.1779 24.5436 12.8683 24.5436C6.55878 24.5436 1.44067 19.4205 1.44067 13.0968C1.44067 6.77314 6.55878 1.65002 12.8683 1.65002C19.1779 1.65002 24.296 6.77314 24.296 13.0968Z"
                        stroke="#707C97"
                        strokeOpacity="0.5"
                        strokeWidth="2.5"
                    />
                    <path
                        d="M8.25818 14.8281C9.12461 16.5429 10.8639 17.7138 12.8682 17.7138C14.8726 17.7138 16.6119 16.5429 17.4783 14.8281"
                        stroke="#707C97"
                        strokeOpacity="0.5"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                    />
                    <ellipse
                        cx="9.41069"
                        cy="9.63399"
                        rx="1.15251"
                        ry="1.15425"
                        fill="#707C97"
                        fillOpacity="0.5"
                    />
                    <ellipse
                        cx="16.3257"
                        cy="9.63399"
                        rx="1.15251"
                        ry="1.15425"
                        fill="#707C97"
                        fillOpacity="0.5"
                    />
                </svg>
            );
        case "camera_light":
            return (
                <svg
                    width="24px"
                    height="24px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="camera_light"
                >
                    <path
                        d="M3 9.8541C3 8.83011 3.83011 8 4.8541 8V8C5.55638 8 6.19839 7.60322 6.51246 6.97508L7.33333 5.33333C7.44329 5.11342 7.49827 5.00346 7.56062 4.90782C7.8859 4.40882 8.41668 4.08078 9.00848 4.01299C9.1219 4 9.24484 4 9.49071 4H14.5093C14.7552 4 14.8781 4 14.9915 4.01299C15.5833 4.08078 16.1141 4.40882 16.4394 4.90782C16.5017 5.00346 16.5567 5.11342 16.6667 5.33333L17.4875 6.97508C17.8016 7.60322 18.4436 8 19.1459 8V8C20.1699 8 21 8.83011 21 9.8541V14.8571C21 16.8619 21 17.8643 20.5402 18.5961C20.3004 18.9777 19.9777 19.3004 19.5961 19.5402C18.8643 20 17.8619 20 15.8571 20H8.14286C6.1381 20 5.13571 20 4.4039 19.5402C4.02229 19.3004 3.69961 18.9777 3.45983 18.5961C3 17.8643 3 16.8619 3 14.8571V9.8541Z"
                        stroke="#fff"
                    />
                    <circle cx="12" cy="13" r="3.5" stroke="#fff" />
                </svg>
            );
        default:
            return <svg width="0" height="0"></svg>;
    }
};

export default SvgGenerator;
