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
          "20.134.775-0",
          "tiger@gmail.com",
          "Java, angular, python, c++",
          "libre"
        ],
        [
          "Priscilla Palomo",
          "19.756.375-2",
          "priscillagit@hotmail.com",
          "Java, angular",
          "Asignado"
        ],
        [
          "Denisse Carvajal",
          "18.563.268-2",
          "Java",
          "denisse68@outlook.com",
          "Asignado"
        ],
        [
          "Felipe Farias",
          "16.987.174-4",
          "Laravel, c++",
          "felippe@hotmail.com",
          "Asignado"
        ],
        [
          "Nicole Saavedra",
          "17.986.774-2",
          "Java, Python, Angular",
          "nicsaa@gmail.com",
          "Libre"
        ],

        [
          "Matias Segura",
          "20.988.665-2",
          "Java, C++",
          "MatInfo@gmai.com",
          "Libre"
        ],
        [
          "Libertad Herrera",
          "20.876.236-9",
          "Angular",
          "Libee@gmail.com",
          "Asignado"
        ],
        [
          "Camila Gomez",
          "20.167.976-k",
          "Java",
          "Cami123@gmail.com",
          "Libre"
        ],
        [
          "Juan Sepulveda",
          "19.765.467-2",
          "Java, angular, python",
          "sepu134@hotmail.com",
          "Libre"
        ],
        [
          "Robert Lopez",
          "15.988.657-3",
          "robertlop@gmail.com",
          "11.998.564-3",
          "Libre"
        ], [
          "Angie Pall",
          "12.677.998-2",
          "angie98@gmail.com",
          "C++, Java",
          "Asignado"
        ],
        [
          "Maria Cortes",
          "15.788.456-2",
          "mari11@gmail.com",
          "Python, Laravel",
          "Libre"
        ],
         [
          "Camila Farias",
          "18.233.776-0",
          "cami@gmail.com",
          "Javascript, angular",
          "Asignado"
        ],
      [
          "Noemi Winters",
          "20.177.887-4",
          "noemi.contact@gmail.com",
          "Java, Angular, Javascript ",
          "Libre"
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
