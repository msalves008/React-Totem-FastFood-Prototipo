import styled from 'styled-components';
import bg from './../../assets/bg_Consumption.png';

export const Container = styled.div`
  .main-context-identification{
    display: flex;
    /* justify-content: center; */
    align-items: baseline;
    flex-direction: column;
    margin: 0;
    height: 100vh;
    width: 100%;
    background-image: url(${bg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .section-identification{
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 2;
    width: 100%;

  }
.identification-title{
  font-family: Reem Kufi;
  font-style: normal;
  font-weight: normal;
  font-size: 4rem;
  line-height: 8rem;
  text-align: center;

  color: #FEEA03;
}

.form-identification{
  flex-direction: column;
  align-content: center;
  display: flex;
  width: 100%;

}
.style-div-label{
  width: 90vw;
  display: flex;
  position: relative;
  left: 10%;
}

.label-identification{
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 1.7rem;
  letter-spacing: 0.185em;
  align-self: flex-start;
  color: #FEEA03;
  padding-bottom: 2%;

}

.input-identification{
  height: 4vh;
  width:80%;
  background: rgba(179, 179, 179, 0.68);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  border: none;
  align-content: center;

  margin: 0 auto;
}

.btn-comfirm{
  align-self: center;
  margin-top: 45px;
  width: 40%;
  height:20%;
  background: #4ABC4E;
  border-radius: 8px;
  border: none;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 1.2rem;
  text-align: center;
  letter-spacing: 0.5em;
  text-transform: uppercase;
  color: #FFFFFF;

}



  .keyborder{
    align-content: flex-end;
    width: 100%;
  }



`;
