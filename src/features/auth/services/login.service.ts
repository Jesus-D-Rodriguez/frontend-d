import { BACKEND_V1_URL } from "app/config";
import { BackendError } from "app/exceptions";
import axios from "axios";
import { Role } from "core/users/types";

const URL = `${BACKEND_V1_URL}/auth/login`;

export default async function login(body: LoginBody): Promise<LoginResponse> {
  try {
    const response = await axios.post(URL, body);
    return response.data;
  } catch (error) {
    throw new BackendError(error);
  }
}

export interface LoginBody {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  email: string;
  role: Role;
  id: number;
}
