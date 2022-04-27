import { useEffect, useState } from "preact/hooks";
import { Col, Container, Row } from "react-grid-system";
import { useSelector } from "react-redux";
import BaseLayout from "../../components/common/layout/baseLayout/BaseLayout";
import ColorSelector from "../../components/productDetail/colorSelector/ColorSelector";
import DetailList from "../../components/productDetail/detailList/DetailList";
import QuantitySelector from "../../components/productDetail/quantitySelector/QuantitySelector";
import style from "./productDetailStyle.css";
import { toast } from "react-toastify";

const product = {
  id: 1,
  brand: "Google",
  model: "Google Nest Hub",
  price: 250,
  cpu: "CPU ARM QuadCore de 64 bits",
  ram: "",
  so: "Android, iOS",
  resolution: "1024 x 600 píxeles",
  battery: "",
  size: {
    width: "17.73",
    height: "12.04",
  },
  weight: "0.558",
  url: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_87424652/fee_786_587_png",
  colors: [
    {
      code: "#bcb8af",
      name: "Tiza",
    },
    {
      code: "#fff",
      name: "White",
    },
    {
      code: "#000",
      name: "Black",
    },
  ],
  description: "Música. Series. Control sencillo del hogar inteligente.",
};

const ProductDetail = ({ id }) => {
  const [addCartInfo, setAddCartInfo] = useState({
    id,
    color: {
      name: "",
      code: "",
    },
    quantity: 0,
  });

  const breadcrumb = [
    {
      title: "Detalle",
      url: "",
      currentPage: true,
    },
  ];

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
    console.log({
      ...addCartInfo,
      quantity: quantity,
    });
  };

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

  return (
    <BaseLayout breadcrumb={breadcrumb}>
      <Container>
        <div className={style.productHeader}>
          <span className={style.productBrand}>{product.brand}</span>
          <h1 className={style.productTitle}>{product.model}</h1>
        </div>
        <Row>
          <Col md={4}>
            <div className={style.productImage}>
              <img
                src={product.url}
                alt={product.model}
                title={product.model}
              />
            </div>
          </Col>
          <Col md={4}>
            <div className={style.productContent}>
              {product.description && (
                <div className={style.productDescription}>
                  {product.description}
                </div>
              )}
              <div className={style.productDetails}>
                <DetailList details={product} />
              </div>
            </div>
          </Col>
          <Col md={4}>
            <div className={style.productActions}>
              <div className={style.productPrice}>EUR 245.56</div>
              <div className={style.productColors}>
                <ColorSelector
                  colors={product.colors}
                  onChange={handleChangeColor}
                />
              </div>
              <div className={style.productQuantity}>
                <QuantitySelector
                  initialValue={addCartInfo.quantity}
                  onAddToCart={handleAddToCart}
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </BaseLayout>
  );
};

export default ProductDetail;
