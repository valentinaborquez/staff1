import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistroService } from '../../services/registro.service';
import {ActivatedRoute} from '@angular/router';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-asignarcol',
  templateUrl: './asignarcol.component.html',
  styleUrls: ['./asignarcol.component.css']
})
export class AsignarcolComponent implements OnInit {
  private idproyecto: string;
  private colaboradores: any;
  constructor(
    private registro: RegistroService,
    private router : Router,
    private activeRouter: ActivatedRoute

  ) { }

  ngOnInit() {
    this.registro.getColaboradores().subscribe(res => {
      this.colaboradores = res;
    });
  }
  asignar(){
    var colaboradores = $('#sel1').val(); // Obtenemos la lista de habilidades
    console.log(colaboradores);
    this.activeRouter.params.subscribe(res => {
      this.idproyecto = res.idproyecto
    })
    this.registro.asignarcol(colaboradores, this.idproyecto);
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
      title: 'Se ha asignado correctamente al proyecto.'
    });
    this.router.navigate(['index/accesoadmin']);
  }

}
