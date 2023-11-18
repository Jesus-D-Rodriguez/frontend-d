import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import { FunctionComponent, useCallback, useState } from "react";
import loginService from "features/auth/services/login.service";
import { useDispatch } from "react-redux";
import { login as loginAction } from "features/auth/store";
import useRedirectWhenLogged from "./use-redirect-when-logged";
import { useNavigate } from "react-router-dom";
import LoginForm from "./login-form/LoginForm";

const Login: FunctionComponent = () => {
  const { loading, onSubmit } = useLogin();

  return (
    <Box>
      <Typography>Login</Typography>
      <FormControl margin="normal">
        <LoginForm disabled={loading} onSubmit={onSubmit} />
      </FormControl>
    </Box>
  );
};

function useLogin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useRedirectWhenLogged();

  const [loading, setLoading] = useState(false);

  const onSubmit = useCallback(
    async (email: string, password: string) => {
      setLoading(true);
      try {
        const result = await loginService({
          email,
          password,
        });
        dispatch(loginAction(result));
        navigate(`/profile/${result.id}`);
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

export default Login;
