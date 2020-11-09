import { HeaderComponent } from './header/header.component';
import { TripOptimizerModule } from './trip-optimizer/trip-optimizer.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TripOptimizerComponent } from './trip-optimizer/trip-optimizer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    TripOptimizerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
