import Box  from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import RegisterForm from "./register-form/RegisterForm";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FunctionComponent, useState, useCallback } from "react";
import registerService from "features/auth/services/register.service";

import useRedirectWhenRegistered from "./use-redirect-when-registered";

const Register: FunctionComponent = () => {

  const { loading, onSubmit } = useRegister();
    return (
      <Box>
        <Typography>Register</Typography>
        <FormControl 
          margin="normal"
        >
          <RegisterForm disabled={loading} onSubmit={onSubmit}/>
        </FormControl>
      </Box>
    );
};

function useRegister() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useRedirectWhenRegistered();

  const [loading, setLoading] = useState(false);

  const onSubmit = useCallback(
    async (name: string, email: string, password: string, confirmPassword: string) => {
      setLoading(true);
      try {
        if ( !name || !email || !password || !confirmPassword) return;

          if (password == confirmPassword) {
            const result = await registerService({
              name,
              email,
              password
            });
            console.log(result);
          }
      } catch (error) {
        // Monstramos mensaje de error :)
      } finally {
        setLoading(false);
      }
    },
    [navigate, dispatch]
  );

  return { onSubmit, loading };
}


export default Register;