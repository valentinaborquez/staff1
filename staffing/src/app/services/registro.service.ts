import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  constructor(private db : AngularFirestore) { }

  // Registro usuario
  guardarreg(nombre:string, apellido:string, correo:string, rut:string, contrasena:string, cargo:string ){
    return true;
  }
  // Asignar habilidades usuarios
  asignar(habilidades: any, rut: string) {
    this.db.collection("colaboradores").doc(rut).update({
        habilidades: habilidades
    })
  }
  // Crear habilidades
  crearhab(habilidad: any){
    console.log('hola', habilidad);
    this.db.collection('habilidades').doc(habilidad).set({
      nombre: habilidad
    })
  }
  // Crear Proyecto
  crearproyecto(nombre: string, estado: string, reqhab: any, fechai: string, fechat: string, descripcion: string){
    console.log('hola', this.crearproyecto);
    this.db.collection('cproyecto').doc(nombre).set({
     nombre: nombre,
     estado: estado,
     reqhab: reqhab,
     fechai: fechai,
     fechat: fechat,
     descripcion: descripcion
     })
  }
  // obtener el listado de proyectos
  getProyectos() {
    return this.db.collection('cproyecto').valueChanges();
  }
  // Registrar colaborador
  guardar(nombre: string, apellido: string, rut: string, correo: string, contrasena: string, cargo: string){
    this.db.collection('colaboradores').doc(rut).set({
      nombre: nombre,
      apellido: apellido,
      rut: rut,
      correo: correo,
      contrasena: contrasena,
      cargo: cargo,
      estado: false
    })
  }
  getRegistro() {
    return this.db.collection('registrar').valueChanges();
  }

  //obtiene el reporte de staffing
  getReporteStaffing(){
    return this.db.collection("colaboradores").valueChanges();
  }
  //obtiene la lista de habilidades
  getHab(){
    return this.db.collection("habilidades").valueChanges();
  }

  // Asigna colaboradores a un proyecto
  asignarcol(colaboradores: any, idproyecto:string) {
    this.db.collection("cproyecto").doc(idproyecto).update({
      colaboradores
    });
    colaboradores.forEach(element => {
      this.db.collection("colaboradores").doc(element).update({
        estado: true
      });
    });

  }

  //obtiene los colaboradores
  getColaboradores() {
    return this.db.collection("colaboradores").valueChanges();
  }

  // obtiene los proyectos de un colaborador
  getProyectosPorColaborador(rut: string) {
    return this.db.collection("cproyecto").valueChanges();
  }

}
