import { Container } from "./styles";
import { useRequest } from "../../hooks/useRequest";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/useProductIdContext";
import loadingIcon from "../../assets/spinning-loading.gif";
import { CategoryContext } from "../../context/categoryIdContext";
import axios from "axios";

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
  const cartContext = useContext(CartContext);
  const categoryContext = useContext(CategoryContext);
  const [productsList, setProductList] = useState<Products>();

  useEffect(() => {
    if (categoryContext.categoryId?.categoryId) {
      axios
        .get(
          `${process.env.REACT_APP_ENDPOINT_API}/product/category/${categoryContext.categoryId.categoryId}`
        )
        .then((res) => {
          setProductList(res.data);
        })
        .catch((err) => {});
    }else{
      axios
        .get(
          `${process.env.REACT_APP_ENDPOINT_API}/product/category/57f2f87e-e830-45ca-a80f-a696d2ba5215`
        )
        .then((res) => {
          setProductList(res.data);
        })
        .catch((err) => {});
    }
  }, [categoryContext.categoryId?.categoryId]);


  function setItemsSelect(idProduct: string, amount: number) {
    onOpenNewModal();
    cartContext.cart.push({
      id: idProduct,
    })
  /*   productContext?.setProductId({
      productId: idProduct,
    });
    productContext?.setAmountOrder({
      amountOrder: amount,
    }); */
  }
  if (!productsList) {
    return (
      <>
       {/*  <img src={loadingIcon} alt="" className="spinningLoading" /> */}
       <span>Carregando........</span>
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
