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
  selector: 'page-retirement',
  templateUrl: 'retirement.html',
})
export class RetirementPage {

  public flashCardsArray: any[] = [];
  public randomCard: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.flashCardsArray.push({front: 'A product that provides a series of payments for a specified amount of time.', back: 'Annuity', box1: 'Cylinder', box2: 'Annuity', box3: 'Forex', box4: 'Crytography'});
    this.flashCardsArray.push({front: 'An abbreviation for self-guided retirement accounts.', back: 'IRA', box1: 'IRA', box2: 'LPL', box3: 'IAR', box4: 'RIA'});
    this.flashCardsArray.push({front: 'An abbreviation for a retirement account guided by your employer.', back: '401k', box1: '529', box2: 'IRA', box3: 'CD', box4: '401k'});
    this.flashCardsArray.push({front: 'Money managers require these as payments for their services.', back: 'Fees', box1: 'Gold', box2: 'Minimum Time Requirement', box3: 'Fees', box4: 'Collateral'});
    this.flashCardsArray.push({front: 'The general investing strategy a retiree should have...', back: 'Conservative', box1: 'Aggressive', box2: 'Conservative', box3: 'Emerging Markets', box4: 'Altcoin Based'});

    this.randomCard = this.flashCardsArray[Math.floor(Math.random() * this.flashCardsArray.length)];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RetirementPage');
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
