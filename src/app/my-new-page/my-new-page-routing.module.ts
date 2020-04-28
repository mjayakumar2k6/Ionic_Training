import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyNewPagePage } from './my-new-page.page';

const routes: Routes = [
  {
    path: '',
    component: MyNewPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyNewPagePageRoutingModule {}
