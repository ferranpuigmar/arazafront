import { useEffect } from "preact/hooks";
import React from "react";
import GridGalleryItem from "../gridGalleryItem/GridGalleryItem";
import styles from "./GrigGalleryStyle.css";

const GridGallery = ({ galleryList }) => {
  useEffect(() => {
    console.log("galleryList: ", galleryList);
  }, [galleryList]);
  return (
    <div className={styles.gridWrapper}>
      {galleryList.length !== 0 ? (
        galleryList.map((item) => <GridGalleryItem key={item.id} {...item} />)
      ) : (
        <p>No hay listado</p>
      )}
    </div>
  );
};

export default GridGallery;
