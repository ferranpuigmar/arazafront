import { useEffect, useState } from "preact/hooks";
import React from "react";
import styles from "./searchBarStyle.css";

const SearchBar = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState();

  const handleSearch = (e) => {
    const { value } = e.target;
    setSearchValue(value ?? "");
  };

  useEffect(() => {
    if (searchValue !== undefined) {
      onSearch(searchValue);
    }
  }, [searchValue]);

  return (
    <div className={styles.searchBar}>
      <input
        name="search"
        onChange={handleSearch}
        className={styles.input}
        value={searchValue}
        placeholder="Escribe aquí para filtrar la búsqueda..."
      />
    </div>
  );
};

export default SearchBar;
