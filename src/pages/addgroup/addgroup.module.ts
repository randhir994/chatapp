import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddgroupPage } from './addgroup';

@NgModule({
  declarations: [
    AddgroupPage,
  ],
  imports: [
    IonicPageModule.forChild(AddgroupPage),
  ],
  exports: [
    AddgroupPage
  ]
})
export class AddgroupPageModule {}
