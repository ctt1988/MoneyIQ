import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EconomicsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-economics',
  templateUrl: 'economics.html',
})
export class EconomicsPage {

  public flashCardsArray: any[] = [];
  public randomCard: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.flashCardsArray.push({front: 'What is APR?', back: 'Annual Percentage Rate'});
    this.flashCardsArray.push({front: 'Banks offer this type of savings account, which locks the money up for a specificed period of time but yields a higher interest rate...', back: 'Certificate of Deposit account'});
    this.flashCardsArray.push({front: 'According to Regulation D, how many withdrawls can be made from a savings account every month?', back: 'A total of 6 withdrawls can be made per month without penalty'});
    this.flashCardsArray.push({front: 'When investing, you receive these returns in cash periodically.', back: 'Dividend'});
    this.flashCardsArray.push({front: 'What is a collection of diversified stocks commonly referred to as?', back: 'Portfolio'});
    this.flashCardsArray.push({front: 'What is the official symbol of a stock?', back: 'ticker'});
    this.flashCardsArray.push({front: 'This payment must be made to the lender, monthly on your home...', back: 'mortgage'});
    this.flashCardsArray.push({front: 'By keeping your money in a savings account you receive this periodic return.', back: 'Interest payment.'});
    this.flashCardsArray.push({front: 'What is the term for loans and credit cards that do not require collateral?', back: 'Unsecured debt.'});
    this.flashCardsArray.push({front: 'When borrowing money, what is the original amount called?', back: 'Principal.'});

    this.randomCard = this.flashCardsArray[Math.floor(Math.random() * this.flashCardsArray.length)];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EconomicsPage');
  }

    openPage() {
    console.log('new flashcard loaded');
    this.navCtrl.setRoot(this.navCtrl.getActive().component);
  }

}
