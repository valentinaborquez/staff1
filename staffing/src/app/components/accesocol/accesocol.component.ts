import { Component, OnInit, ViewChild, Renderer2 } from '@angular/core';
import * as $ from 'jquery';
import {ActivatedRoute} from '@angular/router';
import { RegistroService } from '../../services/registro.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
export interface UserData {
  nombre: string;
  descripcion: string;
  fechai: string;
  fechat: string;
  estado: string;
}
@Component({
  selector: 'app-accesocol',
  templateUrl: './accesocol.component.html',
  styleUrls: ['./accesocol.component.css']
})
export class AccesocolComponent implements OnInit {
  private dtoptions: any = {};
  private rut: string;
  private proyectos = [];
  dataSource: MatTableDataSource<UserData>;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  displayedColumns: string[] = ['nombre', 'descripcion', 'fechai', 'fechat', 'estado'];
  constructor(
    private activeRouter: ActivatedRoute,
    private registro: RegistroService 
  ) { }

  ngOnInit() {
    this.activeRouter.params.subscribe(res => {
      this.rut = res.rut;
      this.registro.getProyectosPorColaborador(res.rut).subscribe(res => {
        let aux = [];
        res.forEach(proy =>{
          proy["colaboradores"].forEach(col => {
            if(col == this.rut) {
              aux.push({
                nombre: proy['nombre'],
                descripcion: proy['descripcion'],
                fechai:proy['fechai'],
                fechat:proy['fechat'],
                estado:proy['estado'],
              });
            }
          });
        })
        this.dataSource = new MatTableDataSource(aux);

      })
    })
  // this.dtoptions = {
  //   data: data
  // }  

  }

}
