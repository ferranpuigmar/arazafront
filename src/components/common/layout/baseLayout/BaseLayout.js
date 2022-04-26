import React from "react";
import Header from "../../header/Header";

const BaseLayout = ({ children, breadcrumb }) => {
  return (
    <>
      <Header breadcrumb={breadcrumb} />
      <main>
        <div>{children}</div>
      </main>
    </>
  );
};

export default BaseLayout;
