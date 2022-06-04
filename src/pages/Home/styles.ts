import styled from "styled-components";
import bg from "./../../assets/home_bg.png";
import bg2 from "./../../assets/bg_Consumption.png";

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
      display: flex;
      flex-direction: column;
      height: 95vh;
      width: 100vw;
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
  @media (max-width: 1440px) {
    .app-main-content {
      background-image: url(${bg2});
      justify-content: flex-start;
      align-items: flex-start;
      .content {
        height: 70vh;
        width: 100vw;
        margin: 2rem;
        h1 {
          font-size: 12rem;
          margin: 0 ;
        }
        h2 {
          font-size: 4rem;
          margin: 0 ;
        }
        img {
          width: auto;
          height: 9rem;
        }
      }
      .mask {
        h1 {
          font-size: 3rem;
        }
      }
    }
  }
  @media (max-width: 768px) {
    .app-main-content {
      justify-content: flex-start;
      align-items: flex-start;
     

      .content {
        height: 60vh;
        h1 {
          font-size: 9rem;
          font-weight: 400;

        }
        h2 {
          font-size: 2rem;
        }
        img {
          width: auto;
          height: 9rem;
          margin-top: 3rem;
        }
      }
      .mask {
        h1 {
          font-size: 3rem;
        }
      }
    }
  }
  @media (max-width: 600px) {
    .app-main-content {
      background-image: url(${bg});
      display: flex;
      justify-content: space-between;
      .content {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        height: 60%;
        position: absolute;
        top: 2rem;
        h1 {
          border: none;
          margin: 0;
          padding: 0;
          font-size: 8rem;
        }
        h2 {
          font-size: 3rem;
        }
        img {
          height: 10rem;
          margin-top: 2.3rem;
        }
      }
      .mask {
        h1 {
          font-size: 2rem;
        }
      }
    }
  }
  @media (max-width: 425px) {
    .app-main-content {
      width: 100vw;
      height: 100vh;
      margin: 0 auto;
      .content {
        margin: 0;
        h1 {
          font-size: 6rem;
        }
        h2 {
          font-size: 2rem;
        }
        img {
          width: auto;
          height: 9rem;
          margin-top: 3rem;
        }
      }
    }
  }
  @media (max-width: 320px) {
    .app-main-content {
      .content {
        h1 {
          font-size: 5rem;
        }
        h2 {
          font-size: 1.5rem;
        }
      }
      .mask {
        h1 {
          font-size: 1.3rem;
        }
      }
    }
  }
`;
