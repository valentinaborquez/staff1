import { Component, OnInit } from '@angular/core';
import { RegistroService } from './../../services/registro.service';
import { Router } from '@angular/router';

import Swal from 'sweetalert2'

@Component({
  selector: 'app-registrocol',
  templateUrl: './registrocol.component.html',
  styleUrls: ['./registrocol.component.css']
})
export class RegistrocolComponent implements OnInit {
  private nombre: string = '';
  private apellido: string = '';
  private correo: string = '';
  private rut: string = '';
  private contrasena: string = '';
  private cargo: string = '';

  constructor(
    private router: Router,
    private registroService: RegistroService
  ) { }
  
  ngOnInit() {
  }

  registro(){
    if(this.nombre !== '' && this.apellido !== '' && this.correo !== '' && this.rut !== '' && this.contrasena !== '' && this.cargo !== '') {
      this.nombre = "";
      this.apellido = "";
      this.correo = "";
      this.rut = "";
      this.contrasena = "";
      this.cargo = "";
      let registro = this.registroService.registro(this.nombre, this.apellido, this.correo, this.rut, this.contrasena, this.cargo);
      if(registro){
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 4000,
          timerProgressBar: true,
          onOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })
        
        Toast.fire({
          icon: 'success',
          title: 'Se ha registrado correctamente, por favor asigne habilidades'
        });
        this.router.navigate(['index/asignarhab']);
 

      }
    } else {
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        onOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: 'error',
        title: 'No se ha podido registrar, verifique su información'
      })   
    }
    

  }
  setNombre(value: any) {
    this.nombre = value;

  }
  setApellido(value: any) {
    this.apellido = value;

  }
  setCorreo(value: any) {
    this.correo = value;

  }
  setCargo(value: any) {
    this.cargo  = value;

  }
  setContrasena(value: any) {
    this.contrasena = value;

  }
  setRut(value: any) {
    this.rut = value;

  }
  
}
