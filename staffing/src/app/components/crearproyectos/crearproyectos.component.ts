import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-crearproyectos',
  templateUrl: './crearproyectos.component.html',
  styleUrls: ['./crearproyectos.component.css']
})
export class CrearproyectosComponent implements OnInit {
  constructor(
    private router : Router
  ) { }

  ngOnInit() {
  }
  guardar(){
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
          title: 'Se ha creado correctamente, por favor asigne habilidades'
        });
        this.router.navigate(['index/asignarhab']);
 

      }
    
    

  
  

}
