import styled from "styled-components";

export const Container = styled.div`
  .main-navbar {
    display: flex;
   min-height: 100vh;
    width: 100%;
    background-color: #fff;
    flex-direction: column;
    padding-top: 2rem;
    button {
      display: flex;
      height: 10%;
      width: 100%;
      flex-direction: column;
      border: none;
      background-color: transparent;
      img {
        /* width: 67px; */
        width: auto;
        max-width: 67px;
        height: 67px;
        /* max-height: 50px; */
        justify-content: center;
        background-position: center;
        background-repeat: no-repeat;
        background-size: auto;
      }
    }
  }
  @media (max-width: 425px) {
    .main-navbar {
      button {
        height: 7%;
        img {
          width: auto;
          max-width: 50px;
          height: 50px;
        }
      }
    }
  }
`;
