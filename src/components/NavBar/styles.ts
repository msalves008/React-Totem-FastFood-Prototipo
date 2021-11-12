
  
import styled from 'styled-components';

export const Container = styled.div`
.main-navbar{
  display: flex;
  height: 100%;
  width: 100%;
  background-color: #fff;
  position: sticky;
  flex-direction: column;
  
}
.base-navbar{
  display: flex;
  height: 10%;
  width: 100%;  
  flex-direction: column;
  border: none;
  background-color: transparent;
}
.item-navbar{
  height: 90%;
 justify-content: center;
  align-items: space-between;
}
.icon{    
    background-position: center;
    background-repeat: no-repeat;
    background-size: auto;
    max-width: 80%;
    height: 100%;
   /*  align-items: center; */
}
`;