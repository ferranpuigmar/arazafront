import React from "react";
import GridGalleryItem from "../gridGalleryItem/GridGalleryItem";
import Skeleton from "../skeleton/Skeleton";
import cx from "classnames";
import styles from "./GrigGalleryStyle.css";

const GridGallerySkeleton = () => {
  return (
    <div className={cx(styles.gridWrapper, styles.skeleton)}>
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
    </div>
  );
};

const GridGallery = ({ galleryList, loading }) => {
  if (loading) {
    return <GridGallerySkeleton />;
  }

  return (
    <div className={styles.gridWrapper}>
      {galleryList ? (
        galleryList?.map((item) => <GridGalleryItem key={item.id} {...item} />)
      ) : (
        <p>No hay listado</p>
      )}
    </div>
  );
};

export default GridGallery;
