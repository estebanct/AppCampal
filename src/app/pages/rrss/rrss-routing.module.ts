import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RrssPage } from './rrss.page';

const routes: Routes = [
  {
    path: '',
    component: RrssPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RrssPageRoutingModule {}
