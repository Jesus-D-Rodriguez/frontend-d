import { useState, ChangeEvent } from "react";

export default function useLoginFormState() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  return {
    email,
    password,
    onChangeEmail,
    onChangePassword,
  };
}
