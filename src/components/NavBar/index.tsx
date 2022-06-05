import React, { useContext, useEffect, useState } from "react";
import { Container } from "./styles";
import { useRequest } from "../../hooks/useRequest";
import { CategoryContext } from "../../context/categoryIdContext";
import axios from "axios";
interface NavBarCategories {
  Categories: Array<NavBarType>;
}
interface NavBarType {
  id: string;
  name: string;
  image: string;
}
export function NavBar() {
  const categoryContext = useContext(CategoryContext);
  const [categories, setCategories] = useState<NavBarCategories>();
  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_ENDPOINT_API}/category/${process.env.REACT_APP_RESTAURANT_ID}`
      )
      .then((res) => {
        setCategories(res.data);
      })
      .catch((err) => {});
  }, []);

  if (!categories) {
    return <></>;
  }

  return (
    <Container>
      <div className="main-navbar">
        {categories.Categories?.map((d) => (
          <button
            className="base-navbar"
            onClick={() =>
              categoryContext.setCategoryId({
                categoryId: d.id,
              })
            }
            key={d.id}
          >
            <img src={d.image} alt="" className="icon" />
          </button>
        ))}
      </div>
    </Container>
  );
}
