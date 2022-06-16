import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    --background1:#f0f2f5;
    --background:#fff;
    --red: #E52E4D;
    --blue: #5429cc;
    --green: #3cc95e;
    --blue-light:#3693FF;
    --text-title: #363f5f;
    --text-body: #969cb3;
    --shape: #ffffff;
    --gray: #8c8888;
    --gradient-primary: linear-gradient(90deg, #E65C00 0%, #F9D423 100%);
    --primary-color: ##FB9400;
  }
 *{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Roboto, sans-serif !important;
   }
 html{
   @media(max-width: 1080px){
      font-size: 93.75%;
   }
   @media(max-width: 720px){
      font-size: 87.5%;
   }
 }
 body{ 
  background: var(--background);
  -webkit-font-smoothing: antialiased;
 }
 body, input, textarea, button{
   font-family: 'Poppins', sans-serif;
   font-weight: 400;
 }
 h1,h2,h3,h4,h5,h6,strong{
  font-weight: 600;
 }
 button{
   cursor: pointer;
 }
 [disabled]{
   opacity: 0.6;
   cursor: not-allowed;
 }
 .react-modal-overlay{
  background: rgba(0,0,0,0.5);
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99999999;
 }
.react-modal-content{
  width: 100%;
  max-width: 35vw;
  height: 90vh;
  background: var(--background);
  position: relative;
  border-radius: 0.25rem;
  .wrapper-header{
    display: flex;
    background: linear-gradient(90deg, #E65C00 0%, #F9D423 100%);
    width: 100%;
    height: 16rem;
  }
}
.react-modal-close{
  position: absolute;
  right: 1.5rem;
  top: 1.5rem;
  border: 0;
  background: transparent;
  transition: filter 0.2;
  &:hover{
    filter: brightness(0.6);
  }
}
/* @media(min-width: 768px){
  .react-modal-content{
  max-width: 40vw !important;
  max-height: 55vh !important;
} 
}
*/
`;
