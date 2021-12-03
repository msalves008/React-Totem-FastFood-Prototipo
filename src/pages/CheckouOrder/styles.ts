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
  .topBar{
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
  }
`;
