import { h } from "preact";
import { useEffect, useState } from "preact/hooks";
import GridGallery from "../../components/common/gridGallery/GridGallery";
import BaseLayout from "../../components/common/layout/baseLayout/BaseLayout";
import Wrapper from "../../components/common/wrapper/Wrapper";
import SearchBar from "../../components/home/searchBar/SearchBar";
import style from "./style.css";

const breadcrumb = [
  {
    title: "Detalle",
    url: "",
    currentPage: true,
  },
];

const mockList = [
  {
    id: "1",
    url: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_87424652/fee_786_587_png",
    model: "Google Nest Hub",
    brand: "Google",
  },
  {
    id: "2",
    url: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_87424652/fee_786_587_png",
    model: "Google Nest Hub",
    brand: "Google",
  },
  {
    id: "3",
    url: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_87424652/fee_786_587_png",
    model: "Google Nest Hub",
    brand: "Google",
  },
  {
    id: "4",
    url: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_87424652/fee_786_587_png",
    model: "Google Nest Hub",
    brand: "Google",
  },
  {
    id: "5",
    url: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_87424652/fee_786_587_png",
    model: "Google Nest Hub",
    brand: "Google",
  },
  {
    id: "6",
    url: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_87424652/fee_786_587_png",
    model: "Google Nest Hub",
    brand: "Google",
  },
  {
    id: "7",
    url: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_87424652/fee_786_587_png",
    model: "Google Nest Hub",
    brand: "Google",
  },
];

const Home = () => {
  const [list, setList] = useState({
    products: [],
    loading: false,
    searchList: [],
    searchResults: null,
  });

  const handleList = () => {
    setList({
      products: mockList,
      loading: false,
      searchList: mockList,
    });
  };

  const handleSearch = (value) => {
    if (value === "") {
      setList({
        ...list,
        searchList: list.products,
      });
    }

    const searchFilter = list.products.filter((item) => {
      const itemModel = item.model.toLowerCase();
      const searchValue = value.toLowerCase();
      return itemModel.includes(searchValue);
    });

    setList({
      ...list,
      searchList: searchFilter,
      searchResults: searchFilter.length ?? 0,
    });
  };

  useEffect(() => {
    if (!list.products.length) handleList();
    console.log(list);
  }, [list]);

  return (
    <BaseLayout breadcrumb={breadcrumb}>
      <div className={style.home}>
        <Wrapper>
          <div className={style.header}>
            <h1 className={style.title}>Home</h1>
            <SearchBar onSearch={handleSearch} />
          </div>
          {list.searchResults === 0 ? (
            <p>No hay resultados con esta búsqueda</p>
          ) : (
            <GridGallery galleryList={list.searchList} />
          )}
        </Wrapper>
      </div>
    </BaseLayout>
  );
};

export default Home;
