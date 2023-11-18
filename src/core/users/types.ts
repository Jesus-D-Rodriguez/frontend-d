export interface User {
  id: number;
  name: string;
  email: string;
  role: Role;
}

export enum Role {
  Graduate = "graduate",
  Admin = "admin",
}
