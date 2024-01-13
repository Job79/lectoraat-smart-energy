export interface IUser {
  id?: string;
  email: string;
  isManager: boolean;
  isActivated: boolean;
  password: string;
  passwordConfirm?: string;
  oldPassword?: string;
}
