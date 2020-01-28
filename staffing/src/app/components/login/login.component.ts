import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './../../services/login.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private user: string;
  private pass: string;
  constructor(
    private router: Router,
    private loginService: LoginService
  ) { }

  ngOnInit() {
  }

  login() {
    console.log('logeando', this.user, this.pass);
    let login = this.loginService.login(this.user, this.pass);
    if(login == "admin") {
      // Logeo exitoso
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        onOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: 'success',
        title: 'Ha iniciado sesión correctamente'
      });
      this.router.navigate(['index/accesoadmin']);
     } 
  }
  setUser(value: any) {
    this.user = value;

  }
  setPass(value: any) {
    this.pass = value;
  }


}
