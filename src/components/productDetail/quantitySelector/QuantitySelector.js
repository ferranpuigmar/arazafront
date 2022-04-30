import { useEffect, useState } from "preact/hooks";
import Skeleton from "react-loading-skeleton";
import styles from "./QuantitySelectorStyle.css";

const QuantitySelector = ({ initialValue, onAddToCart, loading }) => {
  const [value, setValue] = useState();

  const handleChange = (e) => {
    const { value } = e.target;
    setValue(parseInt(value));
  };

  const handleAddToCart = () => {
    onAddToCart(value);
  };

  useEffect(() => {
    setValue(parseInt(initialValue));
  }, [initialValue]);

  if (loading) {
    return (
      <div className={styles.wrapper}>
        <div className={styles.quantitySelectorSkeleton}>
          <Skeleton height={40} />
        </div>
        <div className={styles.buttonWrapperSkeleton}>
          <Skeleton height={40} />
        </div>
      </div>
    );
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.quantitySelector}>
        {value < 10 && (
          <select
            value={value}
            className={styles.select}
            onChange={handleChange}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10+</option>
          </select>
        )}
        {value >= 10 && (
          <input
            type="number"
            value={value}
            className={styles.select}
            onChange={handleChange}
          />
        )}
      </div>
      <div className={styles.buttonWrapper}>
        <button
          className={styles.button}
          type="button"
          onClick={handleAddToCart}
        >
          Añadir al carrito
        </button>
      </div>
    </div>
  );
};

export default QuantitySelector;
