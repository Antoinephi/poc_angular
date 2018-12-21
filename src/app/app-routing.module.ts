import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListStationsComponent } from './list-stations/list-stations.component';
import { StationsMapComponent } from './stations-map/stations-map.component';

const routes: Routes = [
  {
    path: '', component: ListStationsComponent
  },
  {
    path: 'list', component: ListStationsComponent
  },
  {
    path: 'map', component: StationsMapComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
