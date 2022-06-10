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
      margin-bottom: 0.9rem;
      padding: 0.5rem;
      img {
        /* width: 67px; */
        width: auto;
        max-width: 67px;
        height: 67px;
        /* max-height: 50px; */
        margin: 0 auto;
        justify-content: center;
        background-position: center;
        background-repeat: no-repeat;
        background-size: auto;
      }
    }
  }
  button.active {
    background: #fb9400;
    border-radius: 0px 11px 11px 0px;
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
