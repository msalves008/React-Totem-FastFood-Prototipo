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
    categoryContext.setCategoryId({
      categoryId:process.env.REACT_APP_INITIAL_CATEGORY,
    })
  },[])
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
            key={d.id}
            className={(categoryContext?.categoryId?.categoryId === d.id) ? " base-navbar active" : "base-navbar"}
            onClick={() =>{
              categoryContext.setCategoryId({
                categoryId: d.id,
              })
            }
          }
          >
            <img src={d.image} alt="" className="icon" />
          </button>
        ))}
      </div>
    </Container>
  );
}
