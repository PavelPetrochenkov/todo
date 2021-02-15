export interface IUser{
    id:string,
    login:string,
    password:string
}

export interface IUserState{
    user?:IUser,
    isAuthorized:boolean
}