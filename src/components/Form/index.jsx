import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { userValidationSchema } from "../../validation/userValidation";
import Input from "../Input";

import "./styles.css";

function Form() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: yupResolver(userValidationSchema)
  });

  const onSubmit = data => {
    console.log(data);
  }


  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit(onSubmit)}>

        <Input
          id="fullname"
          label="Nome completo"
          name="fullname"
          type="text"
          register={register}
          error={errors.fullname}
        />

        <Input
          id="username"
          label="Username"
          name="username"
          type="text"
          register={register}
          error={errors.username}
        />


        <Input
          id="email"
          label="E-mail"
          name="email"
          type="text"
          register={register}
          error={errors.email}
        />


        <Input
          id="password"
          label="Senha"
          name="password"
          type="password"
          register={register}
          error={errors.password}
        />

        <Input
          id="confirmPassword"
          label="Confirmar senha"
          name="confirmPassword"
          type="password"
          register={register}
          error={errors.confirmPassword}
        />

        <Input
          id="acceptTerms"
          label="Eu li e aceito os termos"
          name="acceptTerms"
          type="checkbox"
          register={register}
          error={errors.acceptTerms}
        />


        <div className="form-group button-group">
          <button type="submit" className="submit-button">
            Registrar
          </button>
          <button type="reset" className="reset-button" onClick={() => reset()}>
            Resetar
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
