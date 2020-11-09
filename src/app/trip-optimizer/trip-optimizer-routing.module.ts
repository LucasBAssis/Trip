import { TripOptimizerComponent } from './trip-optimizer.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
    { path: 'trip', component: TripOptimizerComponent }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TripOptimizerRoutingModule { }
