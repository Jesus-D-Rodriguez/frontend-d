export interface UserInterface {
  id: number;
  name: string;
  email: string;
  image: string;
}

export interface ProfileInterface {
  user: {
    id: number;
    name: string;
    email: string;
    role: string;
  };
  role: string;
  description: string;
}

export interface SkillInterface {
  id: number;
  name: string;
}

export interface ExperienceInterface {
  id: number;
  url: string;
  position: string;
  entityName?: string;
  description: string;
  projectName: string;
}
