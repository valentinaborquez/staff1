import { Component, OnInit } from '@angular/core';
import { RegistroService } from './../../services/registro.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-asignarhab',
  templateUrl: './asignarhab.component.html',
  styleUrls: ['./asignarhab.component.css']
})
export class AsignarhabComponent implements OnInit {
  private hablidades: any;
  private listahabilidades : Array<any>;
  private rut: string;
  constructor(
    private registroService: RegistroService,
    private router : Router,
    private activeRouter: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activeRouter.params.subscribe(res => {
      this.rut = res.rut
    })
    this.registroService.getHab().subscribe(res=> {
      this.listahabilidades = res;
    });
  }

  setHabilidades(value: any) {
    this.hablidades = value.value;
  }

  asignar() {
    var values = $('#Asignarhab').val(); // Obtenemos la lista de habilidades

    this.registroService.asignar(values, this.rut); 
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
    
    
  }
  volver(){
    

  }

}
