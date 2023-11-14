import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BotonComponent } from './boton/boton.component';
import { TituloComponent } from './titulo/titulo.component';
import { CursoTituloComponent } from './curso-titulo/curso-titulo.component';
import { CursoParrafoComponent } from './curso-parrafo/curso-parrafo.component';
import { CursoContenedorComponent } from './curso-contenedor/curso-contenedor.component';



@NgModule({
  declarations: [
    BotonComponent,
    TituloComponent,
    CursoTituloComponent,
    CursoParrafoComponent,
    CursoContenedorComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BotonComponent,
    CursoParrafoComponent,
    CursoTituloComponent,
    TituloComponent
  ]

})
export class AtomosModule { }
