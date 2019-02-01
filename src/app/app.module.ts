import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { EconomicsPage } from '../pages/economics/economics';
import { InvestingPage } from '../pages/investing/investing';
import { PersonalFinancePage } from '../pages/personal-finance/personal-finance';
import { RealEstatePage } from '../pages/real-estate/real-estate';
import { RetirementPage } from '../pages/retirement/retirement';

import { EconomicsFlashCardComponent } from '../components/economics-flash-card/economics-flash-card';
import { InvestingFlashCardComponent } from '../components/investing-flash-card/investing-flash-card';
import { PersonalFinanceFlashCardComponent } from '../components/personal-finance-flash-card/personal-finance-flash-card';
import { RealEstateFlashCardComponent } from '../components/real-estate-flash-card/real-estate-flash-card';
import { RetirementFlashCardComponent } from '../components/retirement-flash-card/retirement-flash-card';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    EconomicsPage,
    InvestingPage,
    PersonalFinancePage,
    RealEstatePage,
    RetirementPage,
    EconomicsFlashCardComponent,
    InvestingFlashCardComponent,
    PersonalFinanceFlashCardComponent,
    RealEstateFlashCardComponent,
    RetirementFlashCardComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    EconomicsPage,
    InvestingPage,
    PersonalFinancePage,
    RealEstatePage,
    RetirementPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
