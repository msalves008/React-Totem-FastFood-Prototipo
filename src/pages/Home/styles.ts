import styled from 'styled-components';
import bg from './../../assets/home_bg.png';
import logo from './../../assets/logoDyoLanches_write.png'


export const Container = styled.div`

.link-newPage{
   border: none;
   text-decoration: none;
}
 .app-main-content{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    background-image: url(${bg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
 }
 .content{
   align-items: center;
   align-content: space-around;
   height: 100vh;
   align-content: center;

 }
.title{  
   flex: 1;  

   font-family: Reenie Beanie;
   font-style: normal;
   font-weight: 500;
   font-size: 10rem;
   line-height: 200px;

   text-align: center;

   color: #FEEA03;

}
.sub-title{
   align-items: center;
  margin: 0 auto;
   flex: 1;
   width: 653px;
   height: 108px;
   font-family: Reem Kufi;
   font-style: normal;
   font-weight: normal;
   font-size: 4rem;
   line-height: 108px;
   text-align: center;

   color: #14EC1C;
}
.logo{
   align-content: center;
   flex: 2;
   width:60vw;
   height:20%;
   margin: 0 auto;
   margin-top:10% ;
   background-image: url(${logo});
    background-repeat: no-repeat;
    background-size: cover; 
   filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)); 


}
.mask{
   flex: 2;
   margin-top:35%;
/*    position: absolute; */

   width:100vw;
   height: 9%;
   left: 0px;

   background: rgba(0, 0, 0, 0.5);
}
.text-info{

font-family: Reem Kufi;
font-style: normal;
font-weight: normal;
font-size: 3rem;
line-height: 108px;
/* identical to box height */

text-align: center;

color: #FF1B1B;
}

`;
