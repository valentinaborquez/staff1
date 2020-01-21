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
          "Tiger Nixon",
          "System Architect",
          "Edinburgh",
          "5421",
          "2011/04/25"
        ],
        [
          "Tiger Nixon",
          "System Architect",
          "Edinburgh",
          "5421",
          "<button>asdasdas</button>"
        ],
        [
          "Tiger Nixon",
          "System Architect",
          "Edinburgh",
          "5421",
          "2011/04/25"
        ],
        [
          "Tiger Nixon",
          "System Architect",
          "Edinburgh",
          "5421",
          "2011/04/25"
        ],
        [
          "Tiger Nixon",
          "System Architect",
          "Edinburgh",
          "5421",
          "2011/04/25"
        ],

        [
          "Tiger Nixon",
          "System Architect",
          "Edinburgh",
          "5421",
          "2011/04/25"
        ],
        [
          "Tiger Nixon",
          "System Architect",
          "Edinburgh",
          "5421",
          "2011/04/25"
        ],
        [
          "Tiger Nixon",
          "System Architect",
          "Edinburgh",
          "5421",
          "2011/04/25"
        ],
        [
          "Tiger Nixon",
          "System Architect",
          "Edinburgh",
          "5421",
          "2011/04/25"
        ],
        [
          "Tiger Nixon",
          "System Architect",
          "Edinburgh",
          "5421",
          "2011/04/25"
        ], [
          "Tiger Nixon",
          "System Architect",
          "Edinburgh",
          "5421",
          "2011/04/25"
        ],
        [
          "Tiger Nixon",
          "System Architect",
          "Edinburgh",
          "5421",
          "2011/04/25"
        ],
         [
          "Tiger Nixon",
          "System Architect",
          "Edinburgh",
          "5421",
          "2011/04/25"
        ],
      [
          "Garrett Winters",
          "Director",
          "Edinburgh",
          "8422",
          "2011/07/25"
      ]
  ]
  this.dtoptions = {
    data: data
  }  

  }

}
