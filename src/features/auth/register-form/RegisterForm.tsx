import { FunctionComponent } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import useRegisterFormState from "./use-register-form-state";

const RegisterForm: FunctionComponent<props> = ({disabled, onSubmit}) =>{
    const {name, email, password, confirmPassword, onChangeName, onChangeEmail, onChangePassword, onChangeConfirmPassword} = useRegisterFormState();
    return <>
        <TextField
            value={name}
            label="Nombre"
            type="name"
            onChange={onChangeName}
            disabled={disabled}

        />
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
            type="email"
            onChange={onChangePassword}
            disabled={disabled}

        />
        <TextField
            value={confirmPassword}
            label="Confirmar contraseña"
            type="confirmPassword"
            onChange={onChangeConfirmPassword}
            disabled={disabled}

        />
        <Button
            variant="contained"
            color="primary"
            type="submit"
            disabled={disabled}
            onClick={()=>{
                onSubmit(name, email, password, confirmPassword);    
            }}

        >
        Registrarse
        </Button>
    </>
}

export interface props {
    disabled: boolean;
    onSubmit: (name: string, email: string, password: string, confirmPassword: string) => void;
}

export default RegisterForm;