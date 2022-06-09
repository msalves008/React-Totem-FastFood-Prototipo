import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: #fafafa;
  .btnPayment {
    position: absolute;
    bottom: 2rem;
  }
  .topBar {
    width: 100vw;
    height: 15vh;
  }
  .Content {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    width: 100vw;
    height: 85vh;
    img {
      width: 25rem;
    }
    /* background-color: red; */
    .receiver {
      display: flex;
      flex-direction: row;
      text-align: center;
      h2 {
        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        font-size: 1.5rem;

        text-align: center;
        color: #000000;
        margin-right: 0.3rem;
      }
      .receiverName {
        color: #fc0505;
      }
    }
    .amount {
      width: 100%;
      display: flex;
      align-items: center;
      flex-direction: row;
      text-align: center;
      justify-content: space-around;
      .amountValue {
        display: flex;
        align-items: center;
        flex-direction: row;
        h2 {
          font-family: Roboto;
          font-style: normal;
          font-weight: bold;
          font-size: 1.8rem;
          text-align: center;

          color: #0b0a0a;
        }
        span {
          font-family: Roboto;
          font-style: normal;
          font-weight: bold;
          font-size: 1.25rem;

          text-align: center;

          color: #fc0505;
        }
      }
    }
    .btn{
      margin-bottom: 2.5rem;
    }
  }
  @media (max-width: 1300px) {
    /* background-color: yellow; */
    .Content {
      h1, h2{
        font-size: 1.5rem;
        margin: 0;
      }
      img {
        width: 25vw;
      }
    }
  }
  @media (max-width: 1024px) {
    /* background-color: yellow; */
    .Content {
      h1, h2{
        font-size: 1.5rem;
        margin: 0;
      }
      img {
        width: 30vw;
      }
    }
  }
  @media (max-width: 600px) {
    /* background-color: yellow; */
    .Content {
      h1, h2{
        font-size: 1.5rem;
        margin: 0;
      }
      img {
        width: 45vw;
      }
    }
  }
  
`;
