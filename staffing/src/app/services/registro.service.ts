import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  constructor() { }

  // Registro usuario
  registro(nombre:string, apellido:string, correo:string, rut:string, cargo:string ){
    return true;
  }
  // Asignar habilidades usuarios
  asignar(habilidades: any) {
    return true;
  }
}
