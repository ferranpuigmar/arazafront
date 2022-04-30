import { useEffect, useState } from "preact/hooks";
import { Col, Container, Row } from "react-grid-system";
import { useDispatch, useSelector } from "react-redux";
import BaseLayout from "../../components/common/layout/baseLayout/BaseLayout";
import ColorSelector from "../../components/productDetail/colorSelector/ColorSelector";
import DetailList from "../../components/productDetail/detailList/DetailList";
import QuantitySelector from "../../components/productDetail/quantitySelector/QuantitySelector";
import style from "./productDetailStyle.css";
import { toast } from "react-toastify";
import { fetchProductsById } from "../../store/slices/productsSlice/thunks/fetchProductById";
import { fetchAddToCart } from "../../store/slices/cartSlice/thunks/fetchAddToCart";
import Skeleton from "react-loading-skeleton";

const ProductDetail = ({ id }) => {
  const dispatch = useDispatch();
  const { product, loading } = useSelector((state) => ({
    product: state.products.productList.find((product) => product.id === id),
    loading: state.loading,
  }));
  const [loadingPage, setLoadingPage] = useState(true);

  const [addCartInfo, setAddCartInfo] = useState({
    id,
    color: {
      name: "",
      code: "",
    },
    quantity: 0,
  });

  const handleChangeColor = (itemColor) => {
    setAddCartInfo({
      ...addCartInfo,
      color: itemColor,
    });
  };

  const handleAddToCart = (quantity) => {
    if (addCartInfo.color.code === "") {
      toast.error("Tienes que seleccionar un color");
      return;
    }
    dispatch(fetchAddToCart({ ...addCartInfo, quantity }));
  };

  useEffect(() => {
    if (!product) {
      dispatch(fetchProductsById(id));
    }
  }, [product]);

  useEffect(() => {
    setAddCartInfo({
      ...addCartInfo,
      quantity: 1,
      color: {
        name: "",
        code: "",
      },
    });
  }, []);

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
        <Col md={4}>
          <div className={style.productImage}>
            {product?.url && !loadingPage ? (
              <img
                src={product?.url}
                alt={product?.model}
                title={product?.model}
              />
            ) : (
              <Skeleton className={style.skeletonImage} />
            )}
          </div>
        </Col>
        <Col md={4} order={{ xs: 3, sm: 2 }}>
          <div className={style.productContent}>
            {product?.description && !loadingPage ? (
              <div className={style.productDescription}>
                {product?.description}
              </div>
            ) : (
              <Skeleton className={style.productDescription} count={3} />
            )}
            <div className={style.productDetails}>
              <DetailList details={product} loading={loadingPage} />
            </div>
          </div>
        </Col>
        <Col md={4} order={{ xs: 2, sm: 3 }}>
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
                colors={product?.colors}
                onChange={handleChangeColor}
                loading={loadingPage}
              />
            </div>
            <div className={style.productQuantity}>
              <QuantitySelector
                initialValue={addCartInfo.quantity}
                onAddToCart={handleAddToCart}
                loading={loadingPage}
              />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
