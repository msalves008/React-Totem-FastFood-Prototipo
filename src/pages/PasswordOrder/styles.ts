import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  max-width: 100vw;
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: #fafafa;
  .finsh{
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
    h2 {
      font-family: Roboto;
      font-style: normal;
      font-weight: bold;
      font-size: 2rem;
      line-height: 28px;
      text-align: center;
      color: #000000;
    }
    h1 {
      font-family: Roboto;
      font-style: normal;
      font-weight: bold;
      font-size: 9rem;
      text-align: center;
      color: #000000;
    }
    h3 {
      font-family: Roboto;
      font-style: normal;
      font-weight: bold;
      font-size: 1.4rem;
      text-align: center;
      color: #0b0a0a;
    }
  }
`;
