import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtomosModule} from '../atomos/atomos.module';
import { HeaderComponent } from './header/header.component';
import { CursoComponent } from './curso/curso.component';
import { ProgresoCursoComponent } from './progreso-curso/progreso-curso.component';


@NgModule({
  declarations: [
    HeaderComponent,
    CursoComponent,
    ProgresoCursoComponent
  ],
  imports: [
    CommonModule,
    AtomosModule
  ],
  exports: [
    CommonModule,
    AtomosModule,
    HeaderComponent,
    CursoComponent,
    ProgresoCursoComponent
  ]
  
})
export class MoleculasModule { }
