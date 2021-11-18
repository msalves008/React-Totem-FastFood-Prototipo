import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  
  .content {
    width: 100%;
    display: flex;
    flex :4;
    padding-top: 3rem;
    flex-direction: column;


    .item {
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;

      padding-top:1rem;

      .quantily {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        button{
          width: 2rem;
          background-color: transparent;
          border: none;
          font-family: "Roboto";
          font-size: 1.5rem;
          line-height: 2rem;
          font-weight: bold;
        }
      }
    }
  }
  .btn {
    position: absolute;
    top: 90%;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 23px;
    text-align: center;
    letter-spacing: 0.5em;

    width: 20rem;
    height: 3.5rem;
    color: #FFFFFF;
    background-color: var(--green);
    border: none;
    border-radius: 0.7rem;
   
  }
`;
