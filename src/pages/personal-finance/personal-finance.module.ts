import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PersonalFinancePage } from './personal-finance';

@NgModule({
  declarations: [
    PersonalFinancePage,
  ],
  imports: [
    IonicPageModule.forChild(PersonalFinancePage),
  ],
})
export class PersonalFinancePageModule {}
