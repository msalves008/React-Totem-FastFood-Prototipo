import { Container } from "./styles";
import { useContext, useEffect, useState } from "react";
import { CategoryContext } from "../../context/categoryIdContext";
import axios from "axios";
import { ProductIdContext } from "../../context/productIdContext";
import { Box, CircularProgress } from "@material-ui/core";

interface Products {
  Products: Array<Product>;
}
interface Product {
  Products: string;
  id: string;
  name: string;
  description: string;
  price: number;
  situation: boolean;
  image: string;
}
interface ProductListProps {
  onOpenNewModal: () => void;
}

export function ProductList({ onOpenNewModal }: ProductListProps) {
  const productIdContext = useContext(ProductIdContext);
  const categoryContext = useContext(CategoryContext);
  const [productsList, setProductList] = useState<Products>();

  useEffect(() => {
    if (categoryContext.categoryId?.categoryId) {
      setProductList(null);
      axios
        .get(
          `${process.env.REACT_APP_ENDPOINT_API}/product/${process.env.REACT_APP_RESTAURANT_ID}/${categoryContext.categoryId?.categoryId}`
        )
        .then((res) => {
          setProductList(res.data);
        })
        .catch((err) => {});
    } else {
      axios
        .get(
          `${process.env.REACT_APP_ENDPOINT_API}/product/${process.env.REACT_APP_RESTAURANT_ID}/${process.env.REACT_APP_INITIAL_CATEGORY}`
        )
        .then((res) => {
          setProductList(res.data);
          categoryContext.setCategoryId({
            categoryId: process.env.REACT_APP_INITIAL_CATEGORY,
          });
        })
        .catch((err) => {});
    }
  }, [categoryContext.categoryId?.categoryId]);

  function setItemsSelect(idProduct: string, amount: number) {
    productIdContext.setProductId({
      productId: idProduct,
    });
    onOpenNewModal();
  }
  if (!productsList) {
    return (
      <>
        {/*  <img src={loadingIcon} alt="" className="spinningLoading" /> */}

        <div className="spinning-loading">
          <CircularProgress />
        </div>
      </>
    );
  }

  return (
    <Container>
      <div className="section-hamburger">
        {productsList.Products.map((product) => (
          <button
            onClick={() => {
              setItemsSelect(product.id, product.price);
            }}
            key={product.id}
          >
            <div className="mask"></div>
            <img src={product.image} alt="" />

            <div className="info-item-hamburger">
              <h3>{product.name}</h3>
              <div className="item-value-container">
                <span>R$</span>
                <h3 className="item-value-hamburger">{product.price}</h3>
              </div>
            </div>
          </button>
        ))}
      </div>
    </Container>
  );
}
