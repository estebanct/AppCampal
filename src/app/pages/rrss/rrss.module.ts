import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RrssPageRoutingModule } from './rrss-routing.module';

import { RrssPage } from './rrss.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RrssPageRoutingModule,
    ComponentsModule
  ],
  declarations: [RrssPage]
})
export class RrssPageModule {}
