import { Component, OnInit, ViewChild, Renderer2} from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import * as $ from 'jquery';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { RegistroService } from '../../services/registro.service';
export interface UserData {
  nombre: string;
  rut: string;
  correo: string;
  hab: string;
  estado: string;
}
@Component({
  selector: 'app-reportestaff',
  templateUrl: './reportestaff.component.html',
  styleUrls: ['./reportestaff.component.css']
})
export class ReportestaffComponent implements OnInit {
  private dtoptions: any = {};
  private data: any;
  dataSource: MatTableDataSource<UserData>;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  displayedColumns: string[] = ['nombre', 'rut', 'correo', 'hab', 'estado'];
  // dataSource=[];
  show: boolean = true;
  constructor(
    private registroService: RegistroService,
    private router : Router
  ) { }

  ngOnInit() {
    this.registroService.getReporteStaffing().subscribe(res => {
      let aux = [];
      console.log(res);
      // this.dataSource = res;
      res.forEach(el => {
        let habilidad = '';
        el['habilidades'].forEach(hab => {
          habilidad = habilidad + ' ' + hab; 
        });
        console.log(el)
        aux.push({
          nombre: el['nombre'],
          rut: el['rut'],
          correo: el['correo'],
          hab: habilidad,
          estado: el['estado'],
        });
      })
      this.dataSource = new MatTableDataSource(aux);

    });
  // this.dtoptions = {
  //   data: data
  // }  

  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  asignar() {
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
        title: 'Se ha asignado correctamente.'
      });
      this.router.navigate(['index/accesoadmin']);
    };

}
