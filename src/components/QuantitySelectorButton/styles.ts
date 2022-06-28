import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row !important;
  height: 2.5rem;
  width: auto;
  text-align: center;

  button {
    width: 2.5rem;
    height: 2.5rem;
    border: none;
    border-radius: 0px 4px 4px 0px;
    font-size: 1.5rem;
    text-align: center;
  }

  .quantity-products {
    width: 2.5rem;
    height: 2.5rem;
    color: #fb9400;
    display: flex;
    align-items: center !important;
    justify-content: center !important;
    flex-direction: column;
    span {
      font-size: 1.5rem;
      text-align: center !important;
    }
  }
  .reduce-quantity-products {
    background: #f2f4f5;
  }
  .increase-quantity-products {
    background-color: #fb9400;
  }
`;
