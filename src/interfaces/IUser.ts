export interface IUser{
    id:string,
    login:string,
    password:string
}

export interface IUserState{
    user?:{ 
        id:string,
        login:string,
        password:string
    },
    isAuthorized:boolean
}