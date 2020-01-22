import { Component, OnInit } from '@angular/core';
import { RegistroService } from './../../services/registro.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-asignarhab',
  templateUrl: './asignarhab.component.html',
  styleUrls: ['./asignarhab.component.css']
})
export class AsignarhabComponent implements OnInit {
  private hablidades: any;
  constructor(
    private registroService: RegistroService,
    private router : Router
  ) { }

  ngOnInit() {
  }

  setHabilidades(value: any) {
    this.hablidades = value.value;
  }

  asignar() {
    if(this.registroService.asignar(this.hablidades)) {
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
        title: 'Las habilidades se han asignado correctamente.'
      });
      this.router.navigate(['index/accesoadmin']);
    };
    
  }
  volver(){
    

  }

}
