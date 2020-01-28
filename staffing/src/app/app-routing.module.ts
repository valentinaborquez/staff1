import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AccesocolComponent } from './components/accesocol/accesocol.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { MenucolComponent } from './components/menucol/menucol.component';
import {MatTableModule} from '@angular/material/table';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule,
  MatPaginatorModule 
} from '@angular/material';
import { DataTablesModule } from 'angular-datatables';
const appRoutes: Routes = [
  { path: 'login',component: LoginComponent },
  {	path: 'accesocol/:rut',component: AccesocolComponent },
  {	path: 'menucol/:rut',component: MenucolComponent },
  { path: 'index', loadChildren: './components/layout/layout.module#LayoutModule'},
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: '**', component: LoginComponent }
];

@NgModule({
  declarations: [
    LoginComponent,
    MenucolComponent,
    AccesocolComponent
  ],
  imports: [
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatPaginatorModule ,
    CommonModule, DataTablesModule, AngularFontAwesomeModule, RouterModule.forRoot(appRoutes, { useHash: true, scrollPositionRestoration: 'enabled' })],

  exports: [RouterModule]
})
export class AppRoutingModule { }
