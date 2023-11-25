import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomemakeupPageRoutingModule } from './homemakeup-routing.module';

import { HomemakeupPage } from './homemakeup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomemakeupPageRoutingModule
  ],
  declarations: [HomemakeupPage]
})
export class HomemakeupPageModule {}
