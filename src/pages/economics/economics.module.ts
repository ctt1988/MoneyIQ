import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EconomicsPage } from './economics';

@NgModule({
  declarations: [
    EconomicsPage,
  ],
  imports: [
    IonicPageModule.forChild(EconomicsPage),
  ],
})
export class EconomicsPageModule {}
