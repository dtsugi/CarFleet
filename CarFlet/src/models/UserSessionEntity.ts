export class UserSessionEntity {
    IdUser: number;
    UserName: string;
    Password: string;
    Token: string;
    DeviceUUID: string;
    StaySession: boolean;
    IdCompany: number;
    IdLanguage: number;

    // constructor(idUser: number, userName: string, password: string, token: string, deviceUUID: string, staySession: boolean, idCompany: number, idLanguage: number ) {
    //     this.IdUser = idUser;
    //     this.UserName = userName;
    //     this.Password = password;
    //     this.Token = token;
    //     this.DeviceUUID = deviceUUID;
    //     this.StaySession = staySession;
    //     this.IdCompany = idCompany;
    //     this.IdLanguage = idLanguage;
    // }    
    constructor() { };

}