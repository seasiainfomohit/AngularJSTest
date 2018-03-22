import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { OverlayModule }   from 'angular-io-overlay';
import { DatePickerModule }   from 'angular-io-datepicker';
import { MyDatePickerModule } from 'mydatepicker';

import { AppComponent } from './app.component';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { ResultcomponentComponent } from './resultcomponent/resultcomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroFormComponent,
    ResultcomponentComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    OverlayModule,
    DatePickerModule,
    MyDatePickerModule,
    HttpModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
