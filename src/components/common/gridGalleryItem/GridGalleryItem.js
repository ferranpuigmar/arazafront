import { route } from "preact-router";
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

  const handleClickItem = () => {
    const path = generatePath(id, model);
    console.log("path: ", path);
    route(path);
  };

  return (
    <div className={styles.item} onClick={handleClickItem}>
      <div className={styles.itemImage}>
        <img src={url} alt={model} title={model} />
      </div>
      <div className={styles.itemContent}>
        <h3>{model}</h3>
        <p>{brand}</p>
      </div>
    </div>
  );
};

export default GridGalleryItem;
