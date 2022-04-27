import { useEffect, useState } from "preact/hooks";
import styles from "./ColorSelectorStyle.css";
import cx from "classnames";

const ColorSelector = ({ colors, onChange }) => {
  const [value, setValue] = useState({
    code: "",
    name: "",
  });

  const handleSelectColor = (itemColor) => {
    setValue(itemColor);
    onChange(itemColor);
  };

  if (!colors) return <></>;

  return (
    <div className={styles.colorsWrapper}>
      <p className={styles.colorsLabel}>Selecciona un color</p>
      <div className={styles.colorList}>
        {colors.map((itemColor) => (
          <div
            className={cx(
              styles.colorListSelector,
              itemColor.name === value.name ? styles.colorActive : ""
            )}
            style={{ backgroundColor: itemColor.code }}
            onClick={() => handleSelectColor(itemColor)}
          ></div>
        ))}{" "}
      </div>
    </div>
  );
};

export default ColorSelector;
