import { TripOptimizerRoutingModule } from './trip-optimizer-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { TripOptimizerComponent } from './trip-optimizer.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';



@NgModule({
  declarations: [
    TripOptimizerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    TripOptimizerRoutingModule,
    MatTableModule,
    MatPaginatorModule
  ]
})
export class TripOptimizerModule { }
