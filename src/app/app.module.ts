import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { AgmCoreModule } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction';   // agm-direction

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDXSqDW99Mr44QqYMiqHsHpyQgaxAsi5Dk'
    }),
    AgmDirectionModule,
  ],
  providers: [],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
