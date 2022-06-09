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
    flex: 4;
    padding-top: 3rem;
    flex-direction: column;

    .item {
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;

      padding-top: 1rem;

      .quantily {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        button {
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

  .productQuantilyGroup {
    width: 100%;
    display: flex;
    flex-direction: row;
    padding-top: 3rem;
    align-items: center;
    justify-content: space-between;

    span {
      display: flex;
      font-family: "Roboto";
      font-size: 1.3rem;
      font-weight: bold;
      display: inline-block;
      color: var(--red);
    }
    .btns {
      h2 {
        color: var(--red);
      }
      position: relative;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      button {
        color: var(--red);
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

  .btn {
    margin-top: 2rem;
  }

  @media (max-width: 425px) {
    h1 {
      font-size: 1.5rem;
    }
    .content {
      justify-content: flex-start;
      h2 {
        font-size: 1rem;
      }
    }
    .productQuantilyGroup {
      span {
        font-size: 1rem;
      }
      .btns {
        h2 {
          font-size: 1rem;
        }
        button {
          font-size: 1rem;
        }
      }
    }
    .btn {
      width: 90%;
      height: auto;
      font-size: 17px;
      line-height: 20px;
      letter-spacing: 0.3em;
    }
  }
`;
