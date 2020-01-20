import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crearhab',
  templateUrl: './crearhab.component.html',
  styleUrls: ['./crearhab.component.css']
})
export class CrearhabComponent implements OnInit {

  constructor(
    
    private router: Router
  ) { }

  ngOnInit() {
  }
  guardarhab(){
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
      title: 'Se ha guardado correctamente'
    });
    this.router.navigate(['index/accesoadmin']);
  }
}
