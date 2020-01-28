import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { RegistroService } from '../../services/registro.service';


@Component({
  selector: 'app-registrocol',
  templateUrl: './registrocol.component.html',
  styleUrls: ['./registrocol.component.css']
})
export class RegistrocolComponent implements OnInit {
  private nombre = '';
  private apellido = '';
  private correo = '';
  private rut = '';
  private contrasena = '';
  private cargo = '';
  registroservice: any;
  registro: any;
  constructor(
    private registrar : RegistroService,
    private router : Router
    ) { }
  
  ngOnInit() {
  }

  save(){
    this.registrar.guardar(this.nombre, this.apellido, this.rut, this.correo, this.contrasena, this.cargo);
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
        this.router.navigate(['index/asignarhab/' + this.rut]);
 
      }
  
  setNombre(value: string){
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
