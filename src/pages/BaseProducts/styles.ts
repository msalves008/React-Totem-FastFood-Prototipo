import styled from "styled-components";

export const Container = styled.div`
  header {
    height: 9rem;
  }
  aside {
    float: left;
    text-align: center;
    width: 5rem;
    height: 80vh;
    background-color: #fff;
  }
  section {
    float: left;
    width: calc(100% - 5rem);
    /* height: 80vh; */
  }
`;
