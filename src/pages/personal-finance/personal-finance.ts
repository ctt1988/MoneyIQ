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
  selector: 'page-personal-finance',
  templateUrl: 'personal-finance.html',
})
export class PersonalFinancePage {

  public flashCardsArray: any[] = [];
  public randomCard: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.flashCardsArray.push({front: 'This account allows you to withdraw money immediately.', back: 'Checking', box1: 'Savings', box2: 'Checking', box3: 'Credit', box4: 'Equity'});
    this.flashCardsArray.push({front: 'This payment must be made to the lender, monthly on your home.', back: 'Mortgage', box1: 'Rent', box2: 'Collateral', box3: 'Principal', box4: 'Mortgage'});
    this.flashCardsArray.push({front: 'By keeping your money in a savings account you receive this periodic return.', back: 'Interest', box1: 'Interest', box2: 'Credit', box3: 'Dividends', box4: 'Stocks'});
    this.flashCardsArray.push({front: 'A plan outlining expenses and revenue of a household.', back: 'Budget', box1: 'Ladder', box2: 'Bill of Sale', box3: 'Budget', box4: 'Lien'});
    this.flashCardsArray.push({front: 'Occurs when withdrawals have gone over the current account balance.', back: 'Overdraft', box1: 'Investment', box2: 'Overdraft', box3: 'Payment Notice', box4: 'Liquidation'});

    this.randomCard = this.flashCardsArray[Math.floor(Math.random() * this.flashCardsArray.length)];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PersonalFinancePage');
  }

    getResultsBox1() {
    var result = document.getElementsByClassName("multi-box-1") as HTMLCollectionOf<HTMLElement>;
    if(this.randomCard.back===this.randomCard.box1){
      console.log('correct answer!');
      result[0].style.backgroundColor = "green";
      
    }
    else {
      console.log('wrong answer');
      result[0].style.backgroundColor = "red";
    }
  }

    getResultsBox2() {
    var result = document.getElementsByClassName("multi-box-2") as HTMLCollectionOf<HTMLElement>;
    if(this.randomCard.back===this.randomCard.box2){
      console.log('correct answer!');
      result[0].style.backgroundColor = "green";
      
    }
    else {
      console.log('wrong answer');
      result[0].style.backgroundColor = "red";
    }
  }

    getResultsBox3() {
    var result = document.getElementsByClassName("multi-box-3") as HTMLCollectionOf<HTMLElement>;
    if(this.randomCard.back===this.randomCard.box3){
      console.log('correct answer!');
      result[0].style.backgroundColor = "green";
      
    }
    else {
      console.log('wrong answer');
      result[0].style.backgroundColor = "red";
    }
  }

    getResultsBox4() {
    var result = document.getElementsByClassName("multi-box-4") as HTMLCollectionOf<HTMLElement>;
    if(this.randomCard.back===this.randomCard.box4){
      console.log('correct answer!');
      result[0].style.backgroundColor = "green";
      
    }
    else {
      console.log('wrong answer');
      result[0].style.backgroundColor = "red";
    }
  }

  getNewCard() {
    console.log('new flashcard loaded');
    this.navCtrl.setRoot(this.navCtrl.getActive().component);
  }

}
