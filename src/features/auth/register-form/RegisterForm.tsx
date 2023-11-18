import { FunctionComponent } from "react";
import TextField from "@mui/material/TextField";
import useRegisterFormState from "./use-register-form-state";

const RegisterForm: FunctionComponent<props> = ({disabled, onSubmit}) =>{
    const {email} = useRegisterFormState();
    return <>
        <TextField
            value={email}
            label="Correo electronico"
        />
    </>
}

export interface props {
    disabled: boolean;
    onSubmit: (email: string, password: string) => void;
}

export default RegisterForm;