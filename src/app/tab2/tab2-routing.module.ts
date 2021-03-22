import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnectionsComponent } from '../connections/connections.component';
import { Tab2Page } from './tab2.page';

const routes: Routes = [
  {
    path: '',
    component: ConnectionsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab2PageRoutingModule { }
