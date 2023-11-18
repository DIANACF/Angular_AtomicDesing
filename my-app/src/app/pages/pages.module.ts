import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TemplatesModule} from '../templates/templates.module'
import { PageInicioComponent } from './page-inicio/page-inicio.component';
import { PageAvanceCursosComponent } from './page-avance-cursos/page-avance-cursos.component';



@NgModule({
  declarations: [
    PageInicioComponent,
    PageAvanceCursosComponent
  ],
  imports: [
    CommonModule,
    TemplatesModule
    
  ],
  exports:[
    PageInicioComponent,
    PageAvanceCursosComponent
  ]
  
 
})
export class PagesModule { }
