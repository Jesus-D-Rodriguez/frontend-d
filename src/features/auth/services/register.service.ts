import { BACKEND_V1_URL } from "app/config";
import { BackendError } from "app/exceptions";
import axios from "axios";

const URL = `${BACKEND_V1_URL}/auth/register`;

export default async function register(
  body: RegisterBody
): Promise<RegisterResponse> {
  try {
    const response = await axios.post(URL, body);
    return response.data;
  } catch (error) {
    throw new BackendError(error);
  }
}

export interface RegisterBody {
  name: string;
  email: string;
  password: string;
}

export interface RegisterResponse {
  name: string;
  email: string;
}
