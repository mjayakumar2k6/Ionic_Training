import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyNewPagePageRoutingModule } from './my-new-page-routing.module';

import { MyNewPagePage } from './my-new-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyNewPagePageRoutingModule
  ],
  declarations: [MyNewPagePage]
})
export class MyNewPagePageModule {}
