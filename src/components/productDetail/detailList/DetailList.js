import React from "react";
import Skeleton from "react-loading-skeleton";
import styles from "./DetailListStyle.css";

const listKeys = {
  cpu: "CPU",
  ram: "Ram",
  resolution: "Resolution",
  battery: "Battery",
  weight: "Weight",
  announced: "2015  September",
  audioJack: "Audio Jack",
  bluetooth: "BlueTooth",
  chipset: "Chipset",
  dimentions: "Dimentions",
  displayResolution: "Display Resolution",
  displaySize: "Display Size",
  displayType: "Display Type",
  edge: "Edge",
  externalMemory: "External memory",
  gprs: "GPRS",
  gps: "GPS",
  gpu: "GPU",
  internalMemory: "Internal Memory",
  networkSpeed: "Network Speed",
  networkTechnology: "NetWork Technology",
  nfc: "Nfc",
  os: "O.S.",
  primaryCamera: "Primary Camara",
  radio: "Radio",
  ram: "Ram",
  secondaryCmera: "Secondary Camara",
  sensors: "sensors",
  sim: "Sim",
  speaker: "Speaker",
  status: "Status",
  usb: "Usb",
  wlan: "WLan",
};

const ItemList = ({ name, value, loading }) => {
  return (
    <dl className={styles.detailListItem}>
      <dt>{!loading ? name : <Skeleton width={50} height={20} />}</dt>
      <dd>{!loading ? value : <Skeleton width={100} height={20} />}</dd>
    </dl>
  );
};

const DetailList = ({ details, loading }) => {
  if (loading) {
    return (
      <>
        <ItemList loading={loading} />
        <ItemList loading={loading} />
        <ItemList loading={loading} />
      </>
    );
  }

  if (!details) return [];

  const list = [];
  for (let detail in details) {
    if (listKeys[detail] && details[detail] !== "") {
      list.push(<ItemList name={listKeys[detail]} value={details[detail]} />);
    }
  }
  return list;
};

export default DetailList;
