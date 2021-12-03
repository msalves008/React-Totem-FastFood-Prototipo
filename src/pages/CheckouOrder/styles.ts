import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  flex-direction: column;

  .link-newPage {
    border: none;
    text-decoration: none;
  }
  .topBar {
    width: 100vw;
    height: 15vh;
  }

  .Content {
    width: 100vw;
    height: 85vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    text-align: center;
    .amountOrder {
      display: flex;
      flex-direction: column;
      margin: 0 ;
     .item{
      display: flex;
      flex-direction: row;
      h5 {
        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        font-size: 1.12rem;
        display: inline-block;

        color: #000000;
      }
     }
    }

    .btnGrops {
      display: flex;
      justify-content: space-between;
      position: absolute;
      bottom: 2rem;
      width: 90vw;
    }
  }
`;
