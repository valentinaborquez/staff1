import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { AccesoadminComponent } from './../accesoadmin/accesoadmin.component';
import { AsignarcolComponent } from './../../components/asignarcol/asignarcol.component';
import { AsignarhabComponent } from './../../components/asignarhab/asignarhab.component';
import { CrearproyectosComponent } from './../../components/crearproyectos/crearproyectos.component';
import { DetalleproyectosComponent } from './../../components/detalleproyectos/detalleproyectos.component';
import { CrearhabComponent } from './../../components/crearhab/crearhab.component';
import { RegistrocolComponent } from './../../components/registrocol/registrocol.component';
import { ReportestaffComponent } from './../../components/reportestaff/reportestaff.component';
import { VerproyectosComponent } from './../../components/verproyectos/verproyectos.component';
import {MatTableModule} from '@angular/material/table';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule,
  MatPaginatorModule 
} from '@angular/material';
import {DataTablesModule} from 'angular-datatables';

@NgModule({
    declarations: [
        LayoutComponent,
        AccesoadminComponent,
        AsignarcolComponent,
        AsignarhabComponent,
        CrearproyectosComponent,
        DetalleproyectosComponent,
        CrearhabComponent,
        RegistrocolComponent,
        ReportestaffComponent,
        VerproyectosComponent
    ],
    imports: [
      CommonModule,
      DataTablesModule,
      LayoutRoutingModule,
      MatTableModule,
      MatButtonModule,
      MatFormFieldModule,
      MatInputModule,
      MatRippleModule,
      MatPaginatorModule 
    ],

  })
  export class LayoutModule { }
  