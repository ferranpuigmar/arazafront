import { useEffect, useState } from "preact/hooks";
import { Col, Container, Row } from "react-grid-system";
import { useDispatch, useSelector } from "react-redux";
import ColorSelector from "../../components/productDetail/colorSelector/ColorSelector";
import DetailList from "../../components/productDetail/detailList/DetailList";
import QuantitySelector from "../../components/productDetail/quantitySelector/QuantitySelector";
import style from "./productDetailStyle.css";
import { toast } from "react-toastify";
import { fetchProductsById } from "../../store/slices/productsSlice/thunks/fetchProductById";
import { fetchAddToCart } from "../../store/slices/cartSlice/thunks/fetchAddToCart";
import Skeleton from "react-loading-skeleton";
import StorageSelector from "../../components/productDetail/storageSelector/StorageSelector";

const ProductDetail = ({ id }) => {
  const dispatch = useDispatch();
  const { product, loading } = useSelector((state) => ({
    product: state.products.product.data,
    loading: state.products.loading,
  }));

  const [loadingPage, setLoadingPage] = useState(true);

  const [addCartInfo, setAddCartInfo] = useState({
    id,
    colorCode: "",
    storageCode: "",
  });

  const handleChangeColor = (color) => {
    setAddCartInfo({
      ...addCartInfo,
      colorCode: color.code,
    });
  };
  const handleChangeStorage = (storage) => {
    setAddCartInfo({
      ...addCartInfo,
      storageCode: storage.code,
    });
  };

  const handleAddToCart = (quantity) => {
    if (addCartInfo.colodeCode === "") {
      toast.error("You have to select a color");
      return;
    }
    if (addCartInfo.storageCode === "") {
      toast.error("You have to select a storage");
      return;
    }
    dispatch(fetchAddToCart(addCartInfo));
  };

  useEffect(() => {
    if (!product) {
      dispatch(fetchProductsById(id));
    }
  }, [product]);

  useEffect(() => {
    if (!loading && product) {
      setLoadingPage(false);
    }
  }, [loading, product]);

  return (
    <Container>
      <div className={style.productHeader}>
        <span className={style.productBrand}>
          {loadingPage ? (
            <Skeleton className={style.productBrandSkeleton} />
          ) : (
            product?.brand
          )}
        </span>
        <h1 className={style.productTitle}>
          {loadingPage ? (
            <Skeleton className={style.productTitleSkeleton} />
          ) : (
            product?.model
          )}
        </h1>
      </div>
      <Row>
        <Col md={2}>
          <div className={style.productImage}>
            {product?.imgUrl && !loadingPage ? (
              <img
                src={product?.imgUrl}
                alt={product?.model}
                title={product?.model}
              />
            ) : (
              <Skeleton className={style.skeletonImage} />
            )}
          </div>
        </Col>
        <Col md={6} order={{ xs: 3, md: 2 }}>
          <div className={style.productContent}>
            <div className={style.productDetails}>
              <DetailList details={product} loading={loadingPage} />
            </div>
          </div>
        </Col>
        <Col md={4} order={{ xs: 2, md: 3 }}>
          <div className={style.productActions}>
            <div className={style.productPrice}>
              {loadingPage ? (
                <Skeleton className={style.productPriceSkeleton} />
              ) : (
                `EUR ${product.price}`
              )}
            </div>
            <div className={style.productColors}>
              <ColorSelector
                colors={product?.options?.colors}
                onChange={handleChangeColor}
                loading={loadingPage}
              />
            </div>
            <div className={style.productStorage}>
              <StorageSelector
                storages={product?.options?.storages}
                onChange={handleChangeStorage}
                loading={loadingPage}
              />
            </div>
            <div className={style.productQuantity}>
              <button
                className={style.addToCartButton}
                type="button"
                onClick={handleAddToCart}
              >
                Añadir al carrito
              </button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
