import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

const appRoutes: Routes = [
  { path: 'login',component: LoginComponent },
  { path: 'index', loadChildren: './components/layout/layout.module#LayoutModule'},
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: '**', component: LoginComponent }
];

@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [RouterModule.forRoot(appRoutes, { useHash: true, scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
