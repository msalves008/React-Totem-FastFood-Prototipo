import styled from 'styled-components';

export const Container = styled.div`
  *{
    display: flex;
    width: 100%;
    height: 100%;
    text-align: center;
    margin: 0 auto;
   
  }

.topbar-base-product{
  width: 100%;
  height: 12vh;
  background-color: yellow;
}

.section-body-base-products{
  width:100%;
  height: 72vh;
    display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  

}
.navbar-base-products{
  /* flex: 0.5; */
  width:12%;
  height: 100%;
  background-color: blue;
}
.body-base-products{
  /* flex: 2; */
  width:88%;
  height: 100%;
  /* background-color: red; */
}

.bottom-base-products{
  width: 100%;
  height: 16vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

}
.bar-options{
  width: 100%;
  height: 25%;
  display: flex;
  margin : 0 auto;
  background-color: var(--green);
  justify-content: center;
  align-items: center;
  .value{
    width: 40%;
    height:auto;
    width: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: center;
    margin: 0 auto;



    h1{ 
      font-family: Roboto;
      font-style: normal;
      font-weight: bold;
      font-size: 2rem;
      line-height: 2.5rem;
      text-align: center;
      color: #FFFFFF;
      display: inline-block; 
      padding-right: 0.5rem;

    }
    div{ 
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 auto;
      h1{         
      position: relative;
      width:auto;
      font-family: Roboto;
      font-style: normal;
      font-weight: bold;
      font-size: 2.6rem;
      line-height: 2.5rem;
      text-align: center;
      color: #FFFFFF;
      display: inline-block; 
 
    }
      span{
      padding-right: 0.5rem;
        position: relative;
        width:auto;
        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        font-size: 1.5rem;
        line-height: 2rem;
        text-align: center;
         color: red;
      }

    }
  }
  .cart{
    width: auto;
    max-width: 20%;

    height: auto;
    display: flex;
    margin : 0 auto;
    align-items: center;      
    justify-content: center;

    button{
      background-color: transparent;
      border: none;
      display: flex;
      flex-direction: column-reverse;
      align-items: center;
      justify-content: center;

      span {        
      flex-direction: column-reverse;       
        font-family: Roboto;
        font-style: normal;
        font-weight: bold;  
        font-size: 1rem;
        color: red;
      }
      img{
        max-height:50%;
      }
    }
  }
}
.section-buttons-base{
  display: flex;
  width: 100%;
  height:75%;
  background-color: #fff;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;  
}

#btn-base-product{
  height:27%;
  width: 40%;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 1.2rem;
  letter-spacing: 0.5em;
  margin: auto;
  border-radius: 8px;  
  text-align:center; 
  justify-content: 'center';
  align-items: 'center';
}
.btn-cancel{
  text-align: center;
  color: #FC0505;
  border: 2px solid;
  background-color: transparent;
  text-align:center;
  justify-content: center;
  align-items: center;
  margin: 15;
}

.btn-finish{
  color: #fff;
  background-color:#4ABC4E;
  border: none; 
  text-align:center;
  justify-content: center;
  align-items: center;
}

`;
