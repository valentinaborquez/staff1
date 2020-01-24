import { Component, OnInit, ViewChild, Renderer2} from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import * as $ from 'jquery';

@Component({
  selector: 'app-verproyectos',
  templateUrl: './verproyectos.component.html',
  styleUrls: ['./verproyectos.component.css']
})
export class VerproyectosComponent implements OnInit {
  private dtoptions: any = {};
  constructor() { }

  ngOnInit() {
    var data = [
      [
          "Proyecto1",
          "Proyecto Empresa Daily",
          "Noemi Gomez, Camila Farias",
          "Java-Angular",
          "Activo",
          "01-01-2020",
          "07-03-2020"
        ],
        [
          "Proyecto2",
          "Proyecto Página web Forge",
          "Valentina Borquez, Millena Trincado",
          "JSON-ANGULAR",
          "Activo",
          "04-01-2020",
          "04-02-2020"
        ],
        [
          "Proyecto3",
          "Proyecto Página web Forge",
          "Valentina Borquez, Millena Trincado",
          "JSON-ANGULAR",
          "Activo",
          "04-01-2020",
          "04-02-2020"
        ],
        [
          "Proyecto4",
          "Proyecto Página web FALABELLA",
          "Denisse Carvajal, Priscilla Palomo",
          "JSON-ANGULAR-JAVA",
          "Finalizado",
          "04-10-2019",
          "04-01-2020"
        ],
        [
          "Proyecto5",
          "Proyecto Página web RIPLEY",
          "Felipe Cortez, Rodrigo Farias",
          "JAVA",
          "Finalizado",
          "01-11-2019",
          "01-01-2020"
        ],
        [
          "Proyecto6",
          "Proyecto Banco Estado",
          "Libertad Herrera, Pedro Gonzales",
          "JAVA-ANGULAR",
          "Finalizado",
          "05-07-2019",
          "01-12-2020"
        ]
  ]
  this.dtoptions = {
    data: data
  } 
  }

}
