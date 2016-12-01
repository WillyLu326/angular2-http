import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';

import { HttpService } from './http/http.service';
import { HttpAppComponent } from './http/http.component';

@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  declarations: [ 
    AppComponent,
    HttpAppComponent
  ],
  providers: [
  	HttpService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}