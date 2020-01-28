import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private router: Router, private db : AngularFirestore) { }

  // Esto hace la lógica del login
  login(user: string, pass: string) {
    //Acá se debe conectar con el backed
    if(user == "admin" && pass=="123") {
      return "admin";
    } else {
      let valido = false;
      // rut corresponde a un colaborador
      this.db.collection("colaboradores").doc(user).valueChanges().subscribe(res => {
        console.log("res", res)
        if(res["contrasena"] === pass) {
          this.router.navigate(["menucol/" + user]);
        }
      });

    }
    
  }
  
}
