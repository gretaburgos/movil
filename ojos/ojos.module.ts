import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OjosPageRoutingModule } from './ojos-routing.module';

import { OjosPage } from './ojos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OjosPageRoutingModule
  ],
  declarations: [OjosPage]
})
export class OjosPageModule {}
