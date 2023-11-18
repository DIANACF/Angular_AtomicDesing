import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MoleculasModule} from '../moleculas/moleculas.module'
import { FooterComponent } from './footer/footer.component';
import { MenuCursosComponent } from './menu-cursos/menu-cursos.component';
import { MenuAvanceCursosComponent } from './menu-avance-cursos/menu-avance-cursos.component';



@NgModule({
  declarations: [
    FooterComponent,
    MenuCursosComponent,
    MenuAvanceCursosComponent
  ],
  imports: [
    CommonModule,
    MoleculasModule
  ],
  exports:[
    MoleculasModule,
    FooterComponent,
    MenuCursosComponent,
    MenuAvanceCursosComponent
  ]
  
  
})
export class OrganismosModule { }
