import { useState, ChangeEvent } from "react";

export default function useRegisterFormState() {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");

    const onChangeName = (event: ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    }

    const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const onChangeConfirmPassword = (event: ChangeEvent<HTMLInputElement>) => {
        setConfirmPassword(event.target.value);
    }
    

    return {
        name,
        email,
        password,
        confirmPassword,
        onChangeEmail,
        onChangePassword,
        onChangeName,
        onChangeConfirmPassword,
    };
}