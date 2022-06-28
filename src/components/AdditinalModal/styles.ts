import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .wrapper-header {
    margin: 0 auto;
    padding: 1.5rem;
    display: flex;
    align-items: center;
    /* justify-content: space-between; */
    flex-direction: column;
    h3 {
      text-align: center;
      font-size: 1.5rem;
      font-weight: 400;
      margin: 0 auto;
      color: #fff;
      letter-spacing: 0.07em;
    }
  }
  .product-image {
    width: 23rem;
    height: auto;
    position: absolute;
    top: 5rem;
  }
  .wrapper-product-information {
    /*  display: relative; */
    margin-top: 8rem;
    margin-left: 2;
    display: flex;
    align-items: left;
    justify-content: left;
    flex-direction: column;
    width: 100%;
  }
  h1 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 2.5rem;
    line-height: 3rem;
    color: #1b1b1b;
    margin-left: 2rem;
    text-align: left;
  }
  .dividers {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    margin: 2rem;

    .divider-left {
      border: 1px solid #fb9400;
      width: 80%;
    }
    .divider-right {
      border: 1px solid #e2e2e2;
      width: 20%;
    }
  }
  .wrapper-product-quantity-amount {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    width: 100%;
    height: 5rem;
    padding: 0 2rem;
    flex-direction: row;
    div {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      flex-direction: column;
      .product-quantity {
        font-family: "Inter";
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        color: #1b1b1b;
        margin-bottom: 1rem;
      }
    }
    .product-unitary-value {
      font-family: "Inter";
      font-style: normal;
      font-weight: 600;
      font-size: 40px;
      line-height: 48px;
      text-align: right;
      color: #fb9400 !important;
    }
  }
  .btn {
    width: 80%;
    height: 3rem;
    margin: 2rem;
  }
`;
