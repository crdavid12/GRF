import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenServiceService {

  constructor() { }

  setToken(token: string):void{
    localStorage.setItem("token", token);
  }

  getToken(): string{
    return localStorage.getItem("token");
  }
}
