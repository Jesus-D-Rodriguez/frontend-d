import axios from "axios";
const BASE_URL = "http://localhost:3000/api/v1/profiles/";

export function fetchOneProfile(profile_id: number) {
  try {
    const res = axios.get(BASE_URL + profile_id);
    return res;
  } catch (error) {
    console.log("hay un error");
  }
}

export function updateProfile(body: JSON, profile_id: number) {
  try {
    const res = axios.patch(
      "http://localhost:3000/api/v1/profiles/" + profile_id,
      body
    );
    return res;
  } catch (error) {
    console.log("Hay un error");
  }
}
