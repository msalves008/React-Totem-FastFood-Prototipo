import React from "react";
import { useHistory } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Container } from "./styles";
import { TextField, Box } from "@material-ui/core";
const schema = yup
  .object({
    name: yup.string().required("Nome é obrigatório"),
    documentNumber: yup
      .string()
      .min(11, "CPF Incompleto")
      .max(11, "Máximo 11 Dígitos")
      .required("CPF é obrigatório"),
  })
  .required();

const Identification: React.FC = () => {
  const history = useHistory();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    console.log(data);
    sessionStorage.setItem("name", data.name);
    sessionStorage.setItem("documentNumber", data.documentNumber);
     history.push("/pixpayment");
  };
  return (
    <Container>
      <div className="main-context-identification">
        <div className="section-identification">
          <h1 className="identification-title">IDENTICAÇÃO</h1>
          <form
            action="submit"
            onSubmit={handleSubmit(onSubmit)}
            className="form-identification"
          >
            <Box
              sx={{
                width: 1000,
                maxWidth: "90%",
                margin: "0 auto",
              }}
            >
              <div className="style-div-label">
                <label className="label-identification">DIGITE SEU CPF:</label>
              </div>
              <Controller
                name="documentNumber"
                control={control}
                render={({ field }) => (
                  <TextField
                    id="outlined-basic"
                    className="textfield"
                    type="text"
                    margin="normal"
                    {...register("documentNumber")}
                    inputProps={{
                      maxLength: 11,
                    }}
                    error={errors.documentNumber}
                    helperText={
                      errors.documentNumber && errors.documentNumber?.message
                    }
                    fullWidth
                    focused
                    variant="outlined"
                    {...field}
                  />
                )}
              />
              <div className="style-div-label">
                <label className="label-identification">DIGITE SEU NOME:</label>
              </div>
              <Controller
                name="name"
                control={control}
                render={({ field }) => (
                  <TextField
                    id="outlined-basic"
                    className="textfield"
                    type="text"
                    margin="normal"
                    {...register("name")}
                    error={errors.name}
                    helperText={errors.name && errors.name?.message}
                    fullWidth
                    focused
                    variant="outlined"
                    {...field}
                  />
                )}
              />
            </Box>
            <button className="btn-comfirm" type="submit">
              Confirmar
            </button>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default Identification;
