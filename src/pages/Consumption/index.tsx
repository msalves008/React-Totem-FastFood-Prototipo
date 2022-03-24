import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";
import { Container } from "./styles";
import iconEatHere from "./../../assets/icon-eat-here.svg";
import iconEatOut from "./../../assets/icon-eat-out.svg";

const Consumption: React.FC = () => {
  const history = useHistory();

  const handleEatHere = useCallback(
    () => history.push("/list-products"),
    [history]
  );
  function eatHere() {
    handleEatHere();
    sessionStorage.setItem("Consumption", "eat-here");
  }

  const handleEatOut = useCallback(
    () => history.push("/list-products"),
    [history]
  );

  function eatOut() {
    handleEatOut();
    sessionStorage.setItem("Consumption", "eat-out");
  }

  return (
    <Container>
      <div className="consuption-container">
        <div className="data-container">
          <h1 className="consuption-title">FORMA DE CONSUMO</h1>
          <div className="consuption-masks">
            <button className="button-mask-element" onClick={() => eatHere()}>
              <div className="eat-container">
                <h1 className="title-button">Comer aqui</h1>
                <img src={iconEatHere} alt="" />
              </div>
            </button>
            <button className="button-mask-element" onClick={() => eatOut()}>
              <div className="eat-container">
                <h1 className="title-button">Para viagem</h1>
                <img src={iconEatOut} alt="" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Consumption;
