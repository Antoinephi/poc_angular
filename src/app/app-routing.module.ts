import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListStationsComponent } from './list-stations/list-stations.component';

const routes: Routes = [
  {
    path: '', component: ListStationsComponent
  },
  {
    path: 'list', component: ListStationsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
