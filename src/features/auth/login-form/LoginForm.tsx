import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { FunctionComponent } from "react";
import useLoginFormState from "./use-login-form-state";

const LoginForm: FunctionComponent<Props> = ({ disabled, onSubmit }) => {
  const { email, password, onChangeEmail, onChangePassword } =
    useLoginFormState();

  return (
    <>
      <TextField
        value={email}
        label="Correo electronico"
        type="email"
        onChange={onChangeEmail}
        disabled={disabled}
      />
      <TextField
        value={password}
        label="Contraseña"
        type="password"
        onChange={onChangePassword}
        disabled={disabled}
      />
      <Button
        variant="contained"
        color="primary"
        type="submit"
        disabled={disabled}
        onClick={() => {
          onSubmit(email, password);
        }}
      >
        Iniciar sesion
      </Button>
    </>
  );
};

export interface Props {
  disabled: boolean;
  onSubmit: (email: string, password: string) => void;
}

export default LoginForm;
