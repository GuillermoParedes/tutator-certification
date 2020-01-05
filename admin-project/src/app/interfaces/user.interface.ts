export interface PersonInterface {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  university: string;
  picture: string;
}


export interface UsersInterface {
  users?: Array<PersonInterface>;
}

export interface ProjectInterface {
  id: number;
  name: string;
  description: string;
  last_update: string;
  status: boolean;
  url: string;
  picture: string;
}

export interface ProjectsInterface {
  projects?: Array<ProjectInterface>;
}
