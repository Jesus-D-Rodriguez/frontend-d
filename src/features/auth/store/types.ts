import { User } from "core/users/types";

export interface Logged {
  isLogged: true;
  token: string;
  user: User;
}

export interface UnLogged {
  isLogged: false;
  token?: null;
  user?: null;
}

export type AuthState = Logged | UnLogged;

export const INITIAL_STATE: AuthState = {
  isLogged: false,
};
