import styled from 'styled-components';
import bg from './../../assets/top.png';
export const Container = styled.div`

  .section-topbar{
    width: 100%;
    height: 100%;
    background-image: url(${bg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    img{
      width: 30%;
      max-height: 73%;
    }
  }  


`
