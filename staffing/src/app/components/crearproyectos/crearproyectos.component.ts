import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { RegistroService } from '../../services/registro.service';

@Component({
  selector: 'app-crearproyectos',
  templateUrl: './crearproyectos.component.html',
  styleUrls: ['./crearproyectos.component.css']
})
export class CrearproyectosComponent implements OnInit {
  private nombre = '';
  private estado = 'Activo';
  private fechai = '';
  private fechat = '';
  private reqhab = '';
  private habilidades: any;
  private descripcion = '';
  constructor(
    private registro : RegistroService,
    private router : Router
  ) { }

  ngOnInit() {
    this.registro.getHab().subscribe(respuesta => {
      this.habilidades = respuesta;
    });
  }
  guardar(){
    var values = $('#reqhab').val(); // Obtenemos la lista de habilidades

    this.registro.crearproyecto(this.nombre, this.estado, values, this.fechai, this.fechat, this.descripcion);
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
          title: 'Se ha creado correctamente, por favor asigne colaboradores'
        });
        this.router.navigate(['index/asignarcol/'+this.nombre]);

      }
      onChangeEvent(ev) {
        this.estado = ev.target.value;
    }
    onChangeEvent2(ev) {
      this.reqhab = ev.target.value; // should print option2
  }
  onChangeEvent3(ev) {
    this.fechai = ev.target.value; // should print option3
}
onChangeEvent4(ev) {
  this.fechat = ev.target.value; // should print option4
}
setNombre(value: any) {
  this.nombre = value;
}
setDescripcion(value: any) {
  this.descripcion = value;
}
}
