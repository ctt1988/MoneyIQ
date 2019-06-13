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
  selector: 'page-investing',
  templateUrl: 'investing.html',
})
export class InvestingPage {

  public flashCardsArray: any[] = [];
  public randomCard: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.flashCardsArray.push({front: 'You receive these returns in cash periodically.', back: 'Dividend', box1: 'Stocks', box2: 'Gold', box3: 'Dividend', box4: 'Credit'});
    this.flashCardsArray.push({front: 'This is what a collection of diversified stocks is commonly referred to as.', back: 'Portfolio', box1: 'Account', box2: 'Lot', box3: 'Trade', box4: 'Portfolio'});
    this.flashCardsArray.push({front: 'This certificate guarantees a return on investment.', back: 'Bond', box1: 'Bond', box2: 'Mutual Fund', box3: 'Blue Chip Stock', box4: 'Commodity'});
    this.flashCardsArray.push({front: 'The official symbol of a stock.', back: 'Ticker', box1: 'Brand', box2: 'Ticker', box3: 'NYSE', box4: 'Price'});
    this.flashCardsArray.push({front: 'An average price of multiple stocks.', back: 'Index', box1: 'Lead', box2: 'Bid', box3: 'Index', box4: 'Starter'});

    this.randomCard = this.flashCardsArray[Math.floor(Math.random() * this.flashCardsArray.length)];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InvestingPage');
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
