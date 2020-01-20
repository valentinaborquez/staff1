import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reportestaff',
  templateUrl: './reportestaff.component.html',
  styleUrls: ['./reportestaff.component.css']
})
export class ReportestaffComponent implements OnInit {

  constructor(
    private router : Router
  ) { }

  ngOnInit() {
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
