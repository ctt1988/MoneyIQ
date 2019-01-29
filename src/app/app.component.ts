import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { PersonalFinancePage } from '../pages/personal-finance/personal-finance';
import { InvestingPage } from '../pages/investing/investing';
import { EconomicsPage } from '../pages/economics/economics';
import { RetirementPage } from '../pages/retirement/retirement';
import { RealEstatePage } from '../pages/real-estate/real-estate';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Personal Finance', component: PersonalFinancePage },
      { title: 'Investing', component: InvestingPage },
      { title: 'Economics', component: EconomicsPage },
      { title: 'Retirement', component: RetirementPage },
      { title: 'Real Estate', component: RealEstatePage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
