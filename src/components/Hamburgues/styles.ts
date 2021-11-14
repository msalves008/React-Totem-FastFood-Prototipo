import styled from 'styled-components';

export const Container = styled.div`
  .section-hamburger{
    width: 100%;
    height: 100%;
    background-color: #fff;
    display: flex;
    flex-wrap: wrap;
    
  }

.base-show-item{
    width: 40%;
    height: 25%;
    background-color:#fff;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    margin: 0 auto;
    margin-top: 5%;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content:center;
    border: none;
    img{
      max-height: 50%;
      width: auto;
    }
    
}

.info-item-hamburger{
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin: 0 auto;
  align-self: center;
}
.itemImage-hamburger{
  width: 80%;
}

.item-title-hamburger{
  text-align: center;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  font-size: 1.5rem;
  font-weight: bold;
  font-family: Roboto;
  
}

.item-value-hamburger{
  text-align: center;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  font-size: 1rem;
  color: red;
}



`;
