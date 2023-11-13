import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtomosModule} from '../atomos/atomos.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    AtomosModule
  ]
  
})
export class MoleculasModule { }
