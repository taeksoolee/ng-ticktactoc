import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TicktactocModule } from './ticktactoc/ticktactoc.module';
import { ComponentModule } from './component/component.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentModule,
    TicktactocModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
