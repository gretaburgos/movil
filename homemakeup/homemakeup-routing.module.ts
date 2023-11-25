import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomemakeupPage } from './homemakeup.page';

const routes: Routes = [
  {
    path: '',
    component: HomemakeupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomemakeupPageRoutingModule {}
