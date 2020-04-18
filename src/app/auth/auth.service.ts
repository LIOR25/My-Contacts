import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface AuthResponseData {
    idToken: string,
    email: string,
    refreshToken: string,
    expiresIn: string,
    localId: string


}

@Injectable({providedIn: 'root'})
export class AuthService{

    constructor(private http: HttpClient){}

    singup(email: string, password: string) {
       return this.http.post<AuthResponseData>(
          "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyArvit_B4Czw-v1fNS_Xg_UygMN6C3W5JQ",
          {
            email: email,
            password: password,
            returnSecureToken: true,
          }
        );
    }
}
