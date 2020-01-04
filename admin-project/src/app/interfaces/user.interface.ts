export interface PersonInterface {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  university: string;
}


export interface UsersInterface {
  users?: Array<PersonInterface>;
}
