import React from "react";
import { useHistory } from "react-router-dom";
import TopBar from "../../components/TopBar";

import { Container } from "./styles";

const PasswordOrder: React.FC = () => {
  const history = useHistory();
  function finshOrder(){
    history.push("/");
  }
  return (
    <Container>
      <div className="topBar">
        <TopBar />
      </div>
      <div className="Content">
        <h2>PEDIDO  EM PREPARO</h2>
        <h2>SENHA</h2>
        <h1>015</h1>
        <h2>AGUARDE SER CHAMADO NO PAINEL</h2>
        <h3>AGREDECEMOS SUA PREFERÊNCIA</h3>
      </div>
      <button className="finsh" onClick={finshOrder}>Finalizar</button>
    </Container>
  );
};

export default PasswordOrder;
