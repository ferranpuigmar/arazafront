import { useEffect, useState } from "preact/hooks";
import { useDispatch, useSelector } from "react-redux";
import Wrapper from "../../components/common/wrapper/Wrapper";
import GridGallery from "../../components/home/gridGallery/GridGallery";
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
      products: productsState.productList.list,
      loading: false,
      searchList: productsState.productList.list,
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
