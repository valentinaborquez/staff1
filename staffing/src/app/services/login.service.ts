import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  // Esto hace la lógica del login
  login(user: string, pass: string) {
    //Acá se debe conectar con el backed
    if(user == "admin" && pass=="123") {
      return true;
    } else {
      return false;
    }
    
  }
}
