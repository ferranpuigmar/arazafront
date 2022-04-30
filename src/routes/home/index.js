import { useEffect, useState } from "preact/hooks";
import { useDispatch, useSelector } from "react-redux";
import GridGallery from "../../components/common/gridGallery/GridGallery";
import Wrapper from "../../components/common/wrapper/Wrapper";
import SearchBar from "../../components/home/searchBar/SearchBar";
import { fetchAllProducts } from "../../store/slices/productsSlice/thunks/fetchAllProducts";
import style from "./style.css";

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
    if (productsState) handleList();
  }, [productsState]);

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, []);

  useEffect(() => {
    console.log("productsState: ", productsState);
  }, [productsState]);

  return (
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
  );
};

export default Home;
