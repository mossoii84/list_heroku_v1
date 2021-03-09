import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {Lift1Component} from './lift1/lift1.component';
import {AgGridTable1Component} from './ag-grid-table1/ag-grid-table1.component';
import {PovorotImageComponent} from './povorot-image/povorot-image.component';

const routes: Routes = [
  {path: '', redirectTo: '', pathMatch: 'full', component: HomeComponent},
  {path: 'lift1', component: Lift1Component },
  {path: 'ag-grid', component: AgGridTable1Component },

  {path: 'povorotImg', component: PovorotImageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
