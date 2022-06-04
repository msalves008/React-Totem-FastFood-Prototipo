import { Button, Rating } from "@material-ui/core";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import TopBar from "../../components/TopBar";
import { Container } from "./styles";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
export function SatisfactionSurvey() {
  const [chanceToUseAgain, setChanceToUseAgain] = useState<number | null>(null);
  const [easyToUse, setEasyToUse] = useState<number | null>(null);
  const [levelOfSatisfaction, setLevelOfSatisfaction] = useState<number | null>(
    null
  );
  const history = useHistory();

  const notifySuccess = () =>
    toast.success(
      "Obrigado por sua resposta. Sua opinião é muito importante.!",
      {
        position: "top-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }
    );
  function handlePostSatisfactionSurvey() {
    if (chanceToUseAgain && easyToUse && levelOfSatisfaction) {
      axios
        .post(`${process.env.REACT_APP_ENDPOINT_API}/surveysatisfaction`, {
          chanceToUseAgain,
          easyToUse,
          levelOfSatisfaction,
        })
        .then(() => {
          notifySuccess();
          setTimeout(() => {
            history.push("/");
            window.location.reload();
          }, 5000);
        })
        .catch(() => {
          history.push("/");
        });
    }
  }

  return (
    <Container>
      <ToastContainer />
      <TopBar />
      <section>
        <h1 className=" yellow">Agradecemos pela preferência!</h1>
        <h2 className="">Seu pedido ficará pronto em breve.</h2>
        <h2 className=" yellow">
          Que tal avaliar como foi seu atendimento neste terminal?
        </h2>
      </section>
      <section className="survey">
        <div className="survey-item">
          <h4 className="survey-question">
            Qual a chance de você usar este terminal novamente?
          </h4>
          <Rating
            name="simple-controlled"
            size="large"
            value={chanceToUseAgain}
            onChange={(event, newValue) => {
              setChanceToUseAgain(newValue);
            }}
          />
        </div>
        <div className="survey-item">
          <h4 className="survey-question">
            Quão fácil foi utilizar este totem?
          </h4>
          <Rating
            name="simple-controlled"
            size="large"
            value={easyToUse}
            onChange={(event, newValue) => {
              setEasyToUse(newValue);
            }}
          />
        </div>
        <div className="survey-item">
          <h4 className="survey-question">
            Qual seu nível de satisfação em relação há usabilidade deste
            equipamento?
          </h4>
          <Rating
            name="simple-controlled"
            size="large"
            value={levelOfSatisfaction}
            onChange={(event, newValue) => {
              setLevelOfSatisfaction(newValue);
            }}
          />
        </div>
      </section>
      <Button
        variant="contained"
        onClick={() => handlePostSatisfactionSurvey()}
      >
        Enviar Resposta
      </Button>
    </Container>
  );
}
