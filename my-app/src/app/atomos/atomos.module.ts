import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BotonComponent } from './boton/boton.component';
import { TituloComponent } from './titulo/titulo.component';
import { CursoTituloComponent } from './curso-titulo/curso-titulo.component';
import { CursoParrafoComponent } from './curso-parrafo/curso-parrafo.component';
import { CursoContenedorComponent } from './curso-contenedor/curso-contenedor.component';
import { BtnMisCursosComponent } from './btn-mis-cursos/btn-mis-cursos.component';
import { BarraProgresoComponent } from './barra-progreso/barra-progreso.component';
import { AvanceCursoParrComponent } from './avance-curso-parr/avance-curso-parr.component';



@NgModule({
  declarations: [
    BotonComponent,
    TituloComponent,
    CursoTituloComponent,
    CursoParrafoComponent,
    CursoContenedorComponent,
    BtnMisCursosComponent,
    BarraProgresoComponent,
    AvanceCursoParrComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BotonComponent,
    CursoParrafoComponent,
    CursoTituloComponent,
    TituloComponent,
    CursoContenedorComponent,
    BtnMisCursosComponent,
    BarraProgresoComponent,
    AvanceCursoParrComponent
    
  ]

})
export class AtomosModule { }
