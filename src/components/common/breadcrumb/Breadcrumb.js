import { Link } from "preact-router";
import React from "react";
import Wrapper from "../wrapper/Wrapper";
import style from "./breadcrumbStyle.css";

const Breadcrumb = ({ breadcrumb }) => {
  return (
    <Wrapper>
      <ul className={style.breadcrumb}>
        <li>
          <Link className={style.breadcrumbAnchor} href="/">
            Home
          </Link>
        </li>
        {breadcrumb.map((link) => (
          <li>
            {link.url ? (
              <Link className={style.breadcrumbAnchor} href={link.url}>
                {link.title}
              </Link>
            ) : (
              <span className={link.currentPage ? style.currentPage : ""}>
                {link.title}
              </span>
            )}
          </li>
        ))}
      </ul>
    </Wrapper>
  );
};

export default Breadcrumb;
