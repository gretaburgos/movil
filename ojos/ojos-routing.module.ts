import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OjosPage } from './ojos.page';

const routes: Routes = [
  {
    path: '',
    component: OjosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OjosPageRoutingModule {}
