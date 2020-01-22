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
          "Proyecto JAVA-ANGULAR",
          "Akjf",
          "2345",
          "2345",
          "2011/04/25"
        ],
        [
          "Proyecto2",
          "Proyecto JSON-ANGULAR",
          "DFGFHJ",
          "ACTIVO",
          "12345",
          "567/04/25"
        ]
  ]
  this.dtoptions = {
    data: data
  } 
  }

}
