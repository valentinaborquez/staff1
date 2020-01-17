import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { VerproyectosComponent } from './components/verproyectos/verproyectos.component';
import { ComponentsComponent } from './components/components.component';
import { RegistrocolComponent } from './components/registrocol/registrocol.component';
import { CrearproyectosComponent } from './components/crearproyectos/crearproyectos.component';
import { HabilidadesComponent } from './components/habilidades/habilidades.component';
import { ReportestaffComponent } from './components/reportestaff/reportestaff.component';
import { AccesoadminComponent } from './components/accesoadmin/accesoadmin.component';
import { ListarComponent } from './components/listar/listar.component';
import { AsignarhabComponent } from './components/asignarhab/asignarhab.component';
import { DetalleproyectosComponent } from './components/detalleproyectos/detalleproyectos.component';
import { CreadoComponent } from './components/creado/creado.component';
import { AsignarcolComponent } from './components/asignarcol/asignarcol.component';
import { AccesocolComponent } from './components/accesocol/accesocol.component';


const appRoutes: Routes = [
  { path : 'login', component: LoginComponent},
  { path : 'verproyectos', component: VerproyectosComponent},
  { path : 'registrocol', component: RegistrocolComponent},
  { path : 'crearproyectos', component: CrearproyectosComponent},
  { path : 'habilidades', component: HabilidadesComponent},
  { path : 'reportestaff', component: ReportestaffComponent},
  { path : 'accesoadmin', component: AccesoadminComponent},
  { path : 'asignarhab', component: AsignarhabComponent},
  { path : 'listar', component: ListarComponent},
  { path : 'creado', component: CreadoComponent},
  { path : 'detalleproyectos', component: DetalleproyectosComponent},
  { path : 'asignarcol', component: AsignarcolComponent},
  { path : 'accesocol', component: AccesocolComponent},
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
    ListarComponent,
    DetalleproyectosComponent,
    AsignarhabComponent,
    CreadoComponent,
    AsignarcolComponent,
    AccesocolComponent,
    
  ],
  imports: [
    RouterModule.forRoot(  appRoutes, {enableTracing: false}),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
