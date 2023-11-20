import { useSelector } from "react-redux";
import { AuthState } from "./store/types";
import { useNavigate } from "react-router-dom";

function useAuthState(): AuthState {
  return useSelector<{ auth: AuthState }>((state) => state.auth) as AuthState;
}

export default function useRedirectWhenRegistered() {
  const authState = useAuthState();
  const navigate = useNavigate();

  if (authState.isLogged) {
    navigate(`/profile/${authState.user.id}`);
    return;
  }
}