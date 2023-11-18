import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {OrganismosModule} from '../organismos/organismos.module'
import { InicioTemplateComponent } from './inicio-template/inicio-template.component';
import { AvanceCursosTemplateComponent } from './avance-cursos-template/avance-cursos-template.component';



@NgModule({
  declarations: [
    InicioTemplateComponent,
    AvanceCursosTemplateComponent
  ],
  imports: [
    CommonModule,
    OrganismosModule
  ],
  exports: [
    InicioTemplateComponent,
    AvanceCursosTemplateComponent
  ]
})
export class TemplatesModule { }
