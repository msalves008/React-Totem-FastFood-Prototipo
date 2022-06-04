import styled from "styled-components";

export const Container = styled.div`
  section {
    .yellow {
      color: #ffc107;
    }
    h1 {
      font-size: 2.5rem;
    }
    h2 {
      font-size: 1.5rem;
      margin-bottom: 2rem;
    }
  }
  .survey {
    display: grid;
    grid-template-columns: 1fr 1fr;
    .survey-item {
      margin: 1rem;
      height: 10rem;
      text-align: center;
    }
  }
  @media (max-width: 500px) {
    section{
      h1 {
      font-size: 2rem;
    }
    h2 {
      font-size: 1.2rem;
      margin-bottom: 1.5rem;
    }
    }
    .survey{
      grid-template-columns: 1fr;
      .survey-item {
        height: auto;
      }
    }
  }
`;
