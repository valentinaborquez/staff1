import { Component, OnInit, ViewChild, Renderer2 } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-accesocol',
  templateUrl: './accesocol.component.html',
  styleUrls: ['./accesocol.component.css']
})
export class AccesocolComponent implements OnInit {
  private dtoptions: any = {};
  constructor() { }

  ngOnInit() {
    var data = [
      [
          "Proyecto Daily",
          "Daily Fresh Pag web Java",
          "01-12-2020",
          "01-24-2020",
          "Finalizado"
        ],
        [
          "Proyecto Banco Estado",
          "Pag web Angular Full",
          "02-13-2019",
          "03-15-2019",
          "Finalizado"
        ],
        [
          "Proyecto Rush",
          "DDBB Springboot",
          "02-05-2019",
          "07-06-2019",
          "Finalizado"
        ],
        [
          "Proyecto Wom",
          "Registro usuario",
          "01-08-2019",
          "09-10-2019",
          "Finalizado"
        ],
        [
          "Proyecto Falabella",
          "Inventario compras",
          "07-09-2019",
          "15-11-2019",
          "Finalizado"
        ],

        [
          "Proyecto Santander",
          "Sistema interno",
          "04-11-2019",
          "10-12-2019",
          "Finalizado"
        ],
        [
          "Proyecto Luckas",
          "Staffing Interno",
          "10-11-2018",
          "09-12-2018",
          "Finalizado"
        ],
        [
          "Proyecto Movilh",
          "Pagina web",
          "29-12-2019",
          "29-01-2020",
          "Activo"
        ]
  ]
  this.dtoptions = {
    data: data
  }  

  }

}
