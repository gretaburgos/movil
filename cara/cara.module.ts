import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CaraPageRoutingModule } from './cara-routing.module';

import { CaraPage } from './cara.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CaraPageRoutingModule
  ],
  declarations: [CaraPage]
})
export class CaraPageModule {}
