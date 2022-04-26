import { Link } from "preact-router";
import React from "react";
import slugify from "react-slugify";
import styles from "./GridGalleryStyle.css";

const GridGalleryItem = ({ id, url, model, brand }) => {
  const generateSlug = (model) => {
    if (!model) return;
    return slugify(model);
  };

  const generatePath = (id, model) => {
    if (!id | !model) return;
    return `/${generateSlug(model)}/${id}`;
  };

  console.log("render...");

  const path = generatePath(id, model);

  return (
    <div className={styles.item}>
      <div className={styles.itemImage}>
        <Link href={path}>
          <img src={url} alt={model} title={model} />
        </Link>
      </div>
      <div className={styles.itemContent}>
        <Link href={path}>
          <h3>{model}</h3>
          <p>{brand}</p>
        </Link>
      </div>
    </div>
  );
};

export default GridGalleryItem;
