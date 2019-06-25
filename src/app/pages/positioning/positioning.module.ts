import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PositioningPage } from './positioning.page';

import { MapButtonComponent } from '../../components/map-button/map-button.component';

const routes: Routes = [
  {
    path: '',
    component: PositioningPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  declarations: [PositioningPage, MapButtonComponent]
})
export class PositioningPageModule {}
