import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AtomosModule} from './atomos/atomos.module';
import {MoleculasModule} from './moleculas/moleculas.module'
import {OrganismosModule} from './organismos/organismos.module'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AtomosModule,
    MoleculasModule,
    OrganismosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
