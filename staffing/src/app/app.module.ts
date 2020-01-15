import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { VerproyectosComponent } from './verproyectos/verproyectos.component';
import { ComponentsComponent } from './components/components.component';
import { RegistrocolComponent } from './components/registrocol/registrocol.component';
import { CrearproyectosComponent } from './components/crearproyectos/crearproyectos.component';
import { HabilidadesComponent } from './components/habilidades/habilidades.component';
import { ReportestaffComponent } from './components/reportestaff/reportestaff.component';
import { AccesoadminComponent } from './components/accesoadmin/accesoadmin.component';
import { ListarComponent } from './components/listar/listar.component';

const appRoutes: Routes = [
  { path : 'login', component: LoginComponent},
  { path : 'verproyectos', component: VerProyectosComponent},
  { path : 'registrocol', component: RegistroColComponent},
  { path : 'crearproyectos', component: CrearProyectosComponent},
  { path : 'habilidaddes', component: HabilidadesComponent},
  { path : 'reportestaff', component: ReporteStaffComponent},
  { path : 'accesoadmin', component: AccesoAdminComponent},
  { path : 'listar', component: ListarComponent},
  { path: '**', redirectTo: 'login' },
  ];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    VerproyectosComponent,
    ComponentsComponent,
    RegistrocolComponent,
    CrearproyectosComponent,
    HabilidadesComponent,
    ReportestaffComponent,
    AccesoadminComponent,
    ListarComponent
  ],
  imports: [
    RouterModule.forRoot(  appRoutes, {enableTracing: false}),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
