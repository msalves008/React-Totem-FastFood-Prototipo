import styled from "styled-components";

export const Container = styled.div`
  .spinning-loading {
    display: flex;
    height: auto;
    width: 3rem;
  }
  .section-hamburger {
    width: 100%;
    height: auto;
    background-color: #fff;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
    /* grid-template-columns: 1fr 1fr;
    grid-template-rows: 22rem 22rem; */
    padding-bottom: 4rem;
    overflow: scroll;
    white-space: nowrap;
    button {
      box-shadow: 0px 24px 40px rgba(0, 0, 0, 0.16);
      border-radius: 24px;
      width: 20rem;
      height: 18rem;
      background-color: #fff;
      margin: 0 auto;
      margin-top: 5%;
      text-align: left;
      display: flex;
      flex-direction: column;
      border: none;
      /* .mask {
        background: #fff0de;
        border-radius: 24px 24px 0px 0px;
        width: 20rem;
        height: 7rem;
        position: absolute;
      } */

      img {
        max-height: 50%;
        width: auto;
        margin-top: 1rem;
        z-index: 9999;
      }
      .info-item-hamburger {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 0 auto;
        h3 {
          text-align: center;
          justify-content: center;
          align-items: center;
          margin: 0 auto;
          font-size: 1.5rem;
          font-weight: bold;
          font-family: Roboto;
        }
      }
      .item-value-container {
        width: auto;
        display: flex;
        flex-direction: row;
        margin: 0;
        padding: 0;
        align-items: stretch;
        /*        text-align: center; */
        span {
          display: flex;
          font-size: 1rem;
          font-weight: bold;
          font-family: Roboto;
          margin-right: 0;
          justify-content: center;
          align-items: center;
          text-align: center;
        }
        h3 {
          font-family: Roboto;
          font-weight: bold;
          font-size: 3rem;
          line-height: 5rem;
          color: var(--red);
          display: inline-block;
        }
      }
    }
    button:last-child {
      margin-bottom: 10rem;
    }
  }
  @media (max-width: 768px) {
    .section-hamburger {
      button {
        width: 19rem;
        height: 17rem;
      }
    }
  }
  @media (max-width: 650px) {
    .section-hamburger {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr;
      button {
        width: 19rem;
        height: 17rem;
      }
    }
  }
  @media (max-width: 425px) {
    .section-hamburger {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr;
      button {
        width: 19rem;
        height: 17rem;
      }
    }
  }
  @media (max-width: 320px) {
    .section-hamburger {
      button {
        width: 17rem;
        height: 15rem;
      }
    }
  }
`;
