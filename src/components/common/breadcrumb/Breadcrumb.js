import { Link } from "preact-router";
import React from "react";
import { useSelector } from "react-redux";
import Wrapper from "../wrapper/Wrapper";
import Skeleton from "../skeleton/Skeleton";
import cx from "classnames";
import style from "./breadcrumbStyle.css";

const BreadcrumbSkeleton = () => {
  return (
    <div className={style.skeleton}>
      <Skeleton />
      <span className={style.breadcrumbSeparator}>/</span>
      <Skeleton />
    </div>
  );
};

const Breadcrumb = ({ matches, path, url }) => {
  const product = useSelector((state) => state.products.product.data);
  if (matches) return <></>;

  return (
    <Wrapper>
      {product?.model ? (
        <ul className={style.breadcrumb}>
          <li>
            <Link className={style.breadcrumbAnchor} href="/">
              Home
            </Link>
          </li>
          <li>
            <span className={style.currentPage}>{product?.model}</span>
          </li>
        </ul>
      ) : (
        <BreadcrumbSkeleton />
      )}
    </Wrapper>
  );
};

export default Breadcrumb;
