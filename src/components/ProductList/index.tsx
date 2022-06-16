import { Container } from "./styles";
import { useContext, useEffect, useState } from "react";
import { CategoryContext } from "../../context/categoryIdContext";
import axios from "axios";
import { ProductContext } from "../../context/productIdContext";
import { Box, CircularProgress } from "@material-ui/core";
import { useRequestProductsList } from "../../hooks/useRequestProductsList";

interface Product {
  Products?: string;
  id: string;
  name: string;
  description?: string;
  price: number;
  situation?: boolean;
  image: string;
}
interface ProductListProps {
  onOpenNewModal: () => void;
  categoryId: string;
}

export function ProductList({ onOpenNewModal }: ProductListProps) {
  const productContext = useContext(ProductContext);
  const categoryContext = useContext(CategoryContext);
  const { data, isLoading, error, isFetching } = useRequestProductsList(
    categoryContext?.categoryId?.categoryId
  );
  function setItemsSelect(product: Product) {
    productContext.setProduct({
      id: product.id,
      image: product.image,
      name: product.name,
      price: product.price,
    });
    onOpenNewModal();
  }
  if (isLoading) {
    return (
        <div className="spinning-loading">
          <CircularProgress />
        </div>
    );
  }

  return (
    <Container>
      <div className="section-hamburger">
        {data.Products.map((product) => (
          <button
            onClick={() => {
              setItemsSelect(product);
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
