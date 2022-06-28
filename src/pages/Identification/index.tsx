import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Container } from "./styles";
import { TextField, Box, Button } from "@material-ui/core";
import TopBarCheckoutSession from "../../components/TopBarCheckout";
import { CartContext } from "../../context/useProductIdContext";
const schema = yup
  .object({
    name: yup.string().required("Nome é obrigatório"),
  })
  .required();

const Identification: React.FC = () => {
  const history = useHistory();
  const {cart} = useContext(CartContext);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    sessionStorage.setItem("name", data.name);
    sessionStorage.setItem("documentNumber", "75992048065");
    history.push("/pixpayment");
  };
  return (
    <Container>
      <TopBarCheckoutSession showTotalValue={false} />
      <section>
        <h1 className="title">IDENTIFICAÇÃO</h1>
        <h1 className="label">Como devemos te chamar ?</h1>
        <form
          action="submit"
          onSubmit={handleSubmit(onSubmit)}
          className="form-identification"
        >
          <Box
            sx={{
              width: "50vw",
              margin: "0 auto",
            }}
          >
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <TextField
                  id="outlined-basic"
                  className="textfield"
                  label="Nome"
                  type="text"
                  margin="normal"
                  {...register("name")}
                 /*  inputProps={{
                    maxLength: 11,
                  }} */
                  error={errors.name}
                  helperText={errors.name && errors.name?.message}
                  disabled={cart.length === 0}
                  fullWidth
                  focused
                  variant="outlined"
                  {...field}
                />
              )}
            />
          </Box>
          <Button
            variant="outlined"
            color="success"
            size="large"
            type="button"
            onClick={()=>history.goBack()}
            style={{ marginRight: "20px" }}
          >
            Voltar
          </Button>

          <Button
            variant="contained"
            color="success"
            size="large"
            type="submit"
            disabled={cart.length === 0}
          >
            Confirmar
          </Button>
        </form>
      </section>
    </Container>
  );
};

export default Identification;
