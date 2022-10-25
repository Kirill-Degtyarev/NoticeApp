import React from "react";
import { Outlet } from "react-router-dom";
import { useAuth } from "Hooks/AuthHooks";

import Menu from "components/Menu/Menu";
import Loader from "components/Loader/Loader";

import styles from "./AppBody.module.css";

const AppBody = (props) => {
    const currentUser = useAuth();

    return (
        <div className={currentUser ? styles["page-app"] : styles["container-loader"]}>
            {currentUser ? (
                <div className={styles["app-body"]}>
                    <Menu logoutHandler={props.logoutHandler} />
                    <div className={styles["app-body__outlet"]}>
                        <Outlet />
                    </div>
                </div>
            ) : (
                <Loader />
            )}
        </div>
    );
};

export default AppBody;
