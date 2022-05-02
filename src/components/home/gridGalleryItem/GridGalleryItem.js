import { route } from "preact-router";
import React from "react";
import slugify from "react-slugify";
import styles from "./GridGalleryStyle.css";

const GridGalleryItem = ({ id, imgUrl, model, brand }) => {
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
    route(path);
  };

  return (
    <div className={styles.item} onClick={handleClickItem}>
      <div className={styles.itemImage}>
        <img src={imgUrl} alt={model} title={model} />
      </div>
      <div className={styles.itemContent}>
        <h3>{model}</h3>
        <p>{brand}</p>
      </div>
    </div>
  );
};

export default GridGalleryItem;
