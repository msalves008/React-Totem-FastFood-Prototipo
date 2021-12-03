import styled from "styled-components";
import bg from "./../../assets/home_bg.png";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  .link-newPage {
    border: none;
    text-decoration: none;
  }
  .app-main-content {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    background-image: url(${bg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    .content {
      align-items: center;
      align-content: space-around;
      height: 95vh;
      width: 100vw;
      align-content: center;
      h1 {
        flex: 1;
        font-family: Reenie Beanie;
        font-style: normal;
        font-weight: 500;
        font-size: 10rem;

        text-align: center;

        color: #feea03;
      }
      h2 {
        align-items: center;
        margin: 0 auto;        
        font-family: Reem Kufi;
        font-style: normal;
        font-weight: normal;
        font-size: 4rem;
        text-align: center;
        color: #14ec1c;
      }
      img {
        display: flex;
        justify-content: center;
        align-content: center;
        width: auto;
        height: 15rem;
        margin: 0 auto;
        margin-top: 5rem;
      }
    }
    .mask {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      width: 100vw;
      height: 8vh;
      left: 0px;
      bottom: 2rem;

      background: rgba(0, 0, 0, 0.5);
      h1 {
        font-family: Reem Kufi;
        font-style: normal;
        font-weight: normal;
        font-size: 3rem;
        text-align: center;
        color: #ff1b1b;
      }
    }
  }
  /* 
  @media (max-width: 1200px) {
    width: 1000px;
    background-color: yellow;
  }
  @media (max-width: 1024px) {
    width: 850px;
    background-color: blue;
  }
  @media (max-width: 868px) {
    width: 650px;
    background-color: orange;
  }
  @media (max-width: 642px) {
    width: 500px;
    background-color: antiquewhite;
  }
  @media (max-width: 500px) {
    width: 400px;
    background-color: lightblue;
    flex-direction: column;
  }
  @media (max-width: 425px) {
    width: 320px;
    background-color: cyan;
    flex-direction: column;
  }
  @media (max-width: 320px) {
    width: 280px;
    background-color: green;
    flex-direction: column;
  } */
`;
