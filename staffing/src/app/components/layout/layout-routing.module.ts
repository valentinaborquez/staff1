import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './../../components/layout/layout.component';
import { AccesoadminComponent } from './../../components/accesoadmin/accesoadmin.component';
import { VerproyectosComponent } from './../../components/verproyectos/verproyectos.component';
import { RegistrocolComponent } from './../../components/registrocol/registrocol.component';
import { CrearproyectosComponent } from './../../components/crearproyectos/crearproyectos.component';
import { ReportestaffComponent } from './../../components/reportestaff/reportestaff.component';
import { AsignarhabComponent } from './../../components/asignarhab/asignarhab.component';
import { DetalleproyectosComponent } from './../../components/detalleproyectos/detalleproyectos.component';
import { AsignarcolComponent } from './../../components/asignarcol/asignarcol.component';
import { AccesocolComponent } from './../../components/accesocol/accesocol.component';
import { CrearhabComponent } from './../../components/crearhab/crearhab.component';

const sideRoutes: Routes = [{

	path: '', component: LayoutComponent, children: [
	{	path: 'accesoadmin',component: AccesoadminComponent }, // Aquí van las rutas con layout
    {   path: 'verproyectos', component: VerproyectosComponent },
  	{	path: 'registrocol', component: RegistrocolComponent },
  	{	path: 'crearproyectos', component: CrearproyectosComponent },
  	{   path: 'reportestaff', component: ReportestaffComponent },
  	{	path: 'accesoadmin', component: AccesoadminComponent },
	{	path: 'asignarhab', component: AsignarhabComponent },
	{	path: 'crearhab', component: CrearhabComponent },
	{	path: 'detalleproyectos', component: DetalleproyectosComponent },
  	{	path: 'asignarcol', component: AsignarcolComponent },
  	{	path: 'accesocol', component: AccesocolComponent }
	,
		// {
		// 	path: '**',
		// 	redirectTo: 'accesoadmin'
		// }
    ]
    
}];
@NgModule({
    imports: [RouterModule.forChild(sideRoutes)],
	exports: [RouterModule],
	
  })
  export class LayoutRoutingModule { }
  