import styled from "styled-components";
import bg from "./../../assets/top.png";
export const Container = styled.header`
  height: 20vh;
  background-color: #fff;
  div {
    width: 90vw;
    height: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      height: 80%;
    }
    section {
      display: flex;
      width: 18rem;
      height: 100%;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .totalValue {
        font-size: 1rem;
        font-weight: bold;
        width: 80%;
        height: 3rem;
        .amount {
          color: red;
        }
      }
      Button {
        width: 80%;
      }
      Button:hover {
        background-color: #ed6c02;
        color: #fff;
        transition: 1.1s;
        border: none;
      }
    }
  }
  @media (max-width: 414px) {
    div{
      img{
        height: 50%;
      }

    }
  }
`;
