import React from "react";
import Header from "../../header/Header";
import styles from "./BaseLayoutStyle.css";
import cx from "classnames";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BaseLayout = ({ children, breadcrumb }) => {
  return (
    <>
      <div
        className={cx(styles.header, breadcrumb ? styles.withBreadcrumb : "")}
      >
        <Header />
        <main>{children}</main>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
      />
    </>
  );
};

export default BaseLayout;
