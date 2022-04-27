import { useEffect, useState } from "preact/hooks";
import { useDispatch, useSelector } from "react-redux";
import GridGallery from "../../components/common/gridGallery/GridGallery";
import BaseLayout from "../../components/common/layout/baseLayout/BaseLayout";
import Wrapper from "../../components/common/wrapper/Wrapper";
import SearchBar from "../../components/home/searchBar/SearchBar";
import { fetchAllProducts } from "../../store/slices/productsSlice";
import style from "./style.css";

const mockList = [
  {
    id: "1",
    url: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_87424652/fee_786_587_png",
    model: "Google Nest Hub",
    brand: "Google",
  },
  {
    id: "2",
    url: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_89796404/fee_325_225_png",
    model: "Altavoz inalámbrico - Sony SRSXB13B.CE7",
    brand: "Sony",
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
  const dispatch = useDispatch();
  const productsState = useSelector((state) => state.products);

  const [list, setList] = useState({
    products: [],
    loading: false,
    searchList: [],
    searchResults: null,
  });

  const handleList = () => {
    setList({
      products: productsState.productList,
      loading: false,
      searchList: productsState.productList,
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
    if (!list.products.length && productsState) handleList();
  }, [list, productsState]);

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, []);

  return (
    <BaseLayout>
      <div className={style.home}>
        <Wrapper>
          <div className={style.header}>
            <SearchBar onSearch={handleSearch} />
          </div>
          {list.searchResults === 0 ? (
            <p>No hay resultados con esta búsqueda</p>
          ) : (
            <GridGallery
              galleryList={list.searchList}
              loading={productsState.loading}
            />
          )}
        </Wrapper>
      </div>
    </BaseLayout>
  );
};

export default Home;
