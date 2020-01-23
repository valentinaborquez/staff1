import { Component, OnInit, ViewChild, Renderer2} from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import * as $ from 'jquery';


@Component({
  selector: 'app-reportestaff',
  templateUrl: './reportestaff.component.html',
  styleUrls: ['./reportestaff.component.css']
})
export class ReportestaffComponent implements OnInit {
  private dtoptions: any = {};
  show: boolean = true;
  constructor(
    private router : Router
  ) { }

  ngOnInit() {
    var data = [
      [
          "Tiger Nixon",
          "System Architect",
          "Edinburgh",
          "asjf",
          "libre"
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
          "asignado"
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
