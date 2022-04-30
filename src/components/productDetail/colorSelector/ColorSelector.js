import { useEffect, useState } from "preact/hooks";
import styles from "./ColorSelectorStyle.css";
import cx from "classnames";
import Skeleton from "react-loading-skeleton";

const ColorListSelectorSkeleton = () => {
  return (
    <div className={styles.colorsWrapper}>
      <p className={styles.colorsLabel}>
        <Skeleton />
      </p>
      <div className={styles.colorList}>
        <Skeleton
          circle={50}
          className={cx(styles.colorListSelector)}
        ></Skeleton>
        <Skeleton
          circle={50}
          className={cx(styles.colorListSelector)}
        ></Skeleton>
        <Skeleton
          circle={50}
          className={cx(styles.colorListSelector)}
        ></Skeleton>
      </div>
    </div>
  );
};

const ColorSelector = ({ colors, onChange, loading }) => {
  const [value, setValue] = useState({
    code: "",
    name: "",
  });

  const handleSelectColor = (itemColor) => {
    setValue(itemColor);
    onChange(itemColor);
  };

  if (loading) {
    return <ColorListSelectorSkeleton />;
  }

  if (!colors) return <></>;

  return (
    <div className={styles.colorsWrapper}>
      <p className={styles.colorsLabel}>Selecciona un color</p>
      <div className={styles.colorList}>
        {!loading ? (
          colors.map((itemColor) => (
            <div
              className={cx(
                styles.colorListSelector,
                itemColor.name === value.name ? styles.colorActive : ""
              )}
              style={{ backgroundColor: itemColor.code }}
              onClick={() => handleSelectColor(itemColor)}
            ></div>
          ))
        ) : (
          <>
            <ColorListSelectorSkeleton />
            <ColorListSelectorSkeleton />
            <ColorListSelectorSkeleton />
          </>
        )}
      </div>
    </div>
  );
};

export default ColorSelector;
