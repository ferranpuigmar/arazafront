import { useState } from "preact/hooks";
import styles from "./StorageSelectorStyle.css";
import cx from "classnames";
import Skeleton from "react-loading-skeleton";

const StoageSelectorSkeleton = () => {
  return (
    <div className={styles.storageWrapper}>
      <p className={styles.storageLabel}>
        <Skeleton />
      </p>
      <div className={styles.storageList}>
        <Skeleton className={styles.storageListSelector}></Skeleton>
        <Skeleton className={styles.storageListSelector}></Skeleton>
      </div>
    </div>
  );
};

const StorageSelector = ({ storages, onChange, loading }) => {
  const [value, setValue] = useState({
    code: "",
    name: "",
  });

  const handleSelectStorage = (storage) => {
    setValue(storage);
    onChange(storage);
  };

  if (loading) {
    return <StoageSelectorSkeleton />;
  }

  if (!storages) return <></>;

  return (
    <div className={styles.storageWrapper}>
      <p className={styles.storageLabel}>Select a storage:</p>
      <div className={styles.storageList}>
        {storages.map((itemStorage) => (
          <div
            className={cx(
              styles.storageListSelector,
              itemStorage.name === value.name ? styles.storageActive : ""
            )}
            onClick={() => handleSelectStorage(itemStorage)}
          >
            {itemStorage.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StorageSelector;
