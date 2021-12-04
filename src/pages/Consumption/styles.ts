import styled from "styled-components";
import bg from "./../../assets/bg_Consumption.png";

export const Container = styled.div`
  .consuption-container {
    display: flex;
    justify-content: center;
    align-items: baseline;
    margin: 0;
    height: 100vh;
    width: 100%;
    background-image: url(${bg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .data-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    /*   background-color: yellow; */
    width: 90%;
    height: 50%;
    padding-top: 5%;
  }
  .consuption-title {
    width: 90%;
    /*  height: 20%; */

    font-family: Reem Kufi;
    font-style: normal;
    font-weight: normal;
    font-size: 3.8rem;
    line-height: 105px;
    text-align: center;

    color: #feea03;
  }

  .consuption-masks {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    /*   background-color: blue; */
    width: 90%;
    height: 80%;
  }
  .button-mask-element {
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: chocolate;
    width: 45%;
    height: 45%;
    border: none;
    background: rgba(178, 178, 178, 0.68);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
  }
  .title-button {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 2rem;
    text-align: center;
    text-transform: uppercase;
    margin: 0 auto;
    color: #000000;
  }

  .eat-container {
    display: flex;
    flex-direction: column;
    /* align-self: center; */
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    img {
      max-width: 90%;
      height: 80%;
      max-height: 80%;
      margin: 0 auto;
    }
  }

  @media (max-width: 600px) {
    .consuption-container {
      width: 100vw;
      height: 100vh;
      h1 {
        font-size: 2.55rem;
      }
      .consuption-masks {
      button {
        height:25vh;
        div{
          justify-content: space-around;
          h1{
            font-size:1.5rem;
          }
          img{
            max-height:15vh;
          }

        }
      }
      }
    }
  }
`;
