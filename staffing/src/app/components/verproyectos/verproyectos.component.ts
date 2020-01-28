import { Component, OnInit, ViewChild, Renderer2} from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import * as $ from 'jquery';
import { RegistroService } from '../../services/registro.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
export interface UserData {
  nombre: string;
  descripcion: string;
  colaboradores: string;
  hab: string;
  estado: string;
  fechai: string;
  fechat: string;
}
@Component({
  selector: 'app-verproyectos',
  templateUrl: './verproyectos.component.html',
  styleUrls: ['./verproyectos.component.css']
})
export class VerproyectosComponent implements OnInit {
  private dtoptions: any = {};
  private data = [];
  dataSource: MatTableDataSource<UserData>;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  displayedColumns: string[] = ['nombre', 'descripcion', 'colaboradores', 'hab', 'estado', 'fechai', 'fechat'];
  constructor(private registro: RegistroService) { }

  ngOnInit() {
  this.registro.getProyectos().subscribe(respuesta => {
    let aux = [];
    respuesta.forEach(el => {
      console.log(el)
      let habilidad = '';
      let colaborador = '';
      el['reqhab'].forEach(hab => {
        habilidad = habilidad + ' ' + hab; 
      });
      el['colaboradores'].forEach(col => {
        colaborador = colaborador + ' ' + col; 
      });
      aux.push({
        nombre: el['nombre'],
        descripcion: el['descripcion'],
        colaboradores: colaborador,
        hab: habilidad,
        estado: el['estado'],
        fechai: el['fechai'],
        fechat: el['fechat'],

      });
      this.dataSource = new MatTableDataSource(aux);



    })
  })
  
  }

}
