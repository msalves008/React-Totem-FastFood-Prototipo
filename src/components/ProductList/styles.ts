import styled from "styled-components";

export const Container = styled.div`
    .spinning-loading{
      display: flex;
      height: auto;
      width: 3rem;
    }
  .section-hamburger {
    width: 100%;
    height: auto;
    background-color: #fff;
    display: flex;
    flex-wrap: wrap;
    button {
     /*  width: 40%;
      height: 25%; */
      width: 22rem;
      height: 20rem;
      background-color: #fff;
      box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25);
      border-radius: 8px;
      margin: 0 auto;
      margin-top: 5%;
      display: flex;
      flex-direction: column;
      text-align: center;
      justify-content: center;
      border: none;
      img {
        max-height: 50%;
        width: auto;
        padding-top: 0.5rem;
      }
      .info-item-hamburger {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
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
  }


`;
