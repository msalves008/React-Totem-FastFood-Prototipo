import styled from "styled-components";

export const Container = styled.div`
  * {
    display: flex;
    width: 100%;
    height: 100%;
    margin: 0 auto;
  }
  .link-newPage {
    border: none;
    text-decoration: none;
  }

  .Content {
    width: 60rem;
    height: 80rem;
    display: flex;
    flex-direction: column;
   /*  align-items: center; */
 
    background: rgba(178, 178, 178, 0.03);
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    margin: 0 auto;
    h1 {
      display: flex;
      justify-content: center;
      margin-top: 3rem;
      width: auto;
      height: 3rem;
    }
    .Table_Checkout_Product {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      width: 100%;
      height: auto;
      

      strong {
        display: flex;
        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        font-size: 1.5rem;
        line-height: 18px;
        color: #8c8888;
        margin: 0 auto;
        width: auto;
        align-items: center;
      }
    }
  }
`;
