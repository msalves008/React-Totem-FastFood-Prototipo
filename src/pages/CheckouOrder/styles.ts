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

    table {
      width: 90vw;
      display: flex;
      flex-direction: column;

      tr {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        text-align: left !important;
        
        th {
          display: flex;
          width: 100%;
          
          font-family: Roboto;
          font-style: normal;
          font-weight: bold;
          font-size: 1.3rem;
          color: #8c8888;
        text-align: left;

        }
        td {
          width: 100%;
          display: flex;
          text-align: left !important;
          font-family: Roboto;
          font-style: normal;
          font-weight: bold;
          font-size: 1.3rem;
          color: #000000;
          margin: 0 auto;
          margin-bottom: .2rem;
        

        }
      }
    }

    .amountOrder {
      display: flex;
      flex-direction: column;
      margin: 0;

      border: none;
      .item {
        display: flex;
        flex-direction: row;
        border: none;
        margin: 0;
        height: 3rem;

        h5 {
          font-family: Roboto;
          font-style: normal;
          font-weight: bold;
          font-size: 1.7rem;
          border: none;
          text-align: justify;
          justify-content: center;

          color: #000000;
        }
        .colorRed {
          color: #ff0000;
        }
      }
    }

    .btnGrops {
      display: flex;
      justify-content: space-between;
      position: absolute;
      bottom: 2rem;
      width: 90vw;
      .btnCheckout {
        width: 40vw;
      }
      Button {
        height: 4vh;
        width: 40vw;
        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        font-size: 1.25rem;
        text-align: center;
      }
    }
  }
`;
