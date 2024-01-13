export interface IUser {
  id?: string;
  email: string;
  isManager: boolean;
  password: string;
  passwordConfirm?: string;
  oldPassword?: string;
  emailVisibility: boolean;

  created: number;
  updated: number;
}
