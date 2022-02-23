export interface UserLogin {
  username: string,
  password: string
}

export interface UserInterface extends UserLogin{
  classe: string,
  level: number
}

export interface User extends UserInterface {
  id: number
}