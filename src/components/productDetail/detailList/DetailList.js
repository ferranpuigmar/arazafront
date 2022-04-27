import React from "react";
import styles from "./DetailListStyle.css";

const listKeys = {
  cpu: "CPU",
  ram: "Ram",
  so: "S.O.",
  resolution: "Resolution",
  battery: "Battery",
  weight: "Weight",
};

const ItemList = ({ name, value }) => {
  return (
    <dl className={styles.detailListItem}>
      <dt>{name}</dt>
      <dd>{value}</dd>
    </dl>
  );
};

const DetailList = ({ details }) => {
  const list = [];
  for (let detail in details) {
    if (listKeys[detail] && details[detail] !== "") {
      list.push(<ItemList name={listKeys[detail]} value={details[detail]} />);
    }
  }
  return list;
};

export default DetailList;
