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
  	this.flashCardsArray.push({front: 'Someone who makes a good or service.', back: 'Producer', box1: 'Banker', box2: 'Agent', box3: 'Producer', box4: 'Lender'});
    this.flashCardsArray.push({front: 'Someone who buys a good or service.', back: 'Consumer', box1: 'Consumer', box2: 'Arbitrator', box3: 'Chancellor', box4: 'Investor'});
    this.flashCardsArray.push({front: 'The abbreviation of country’s yearly measured productivity.', back: 'GDP', box1: 'ADP', box2: 'GDP', box3: 'NDP', box4: 'COD'});
    this.flashCardsArray.push({front: 'Goods from a foreign country that are brought into a country for sale.', back: 'Imports', box1: 'Bulk', box2: 'Currency', box3: 'Imports', box4: 'Exports'});
    this.flashCardsArray.push({front: 'The use of goods and services.', back: 'Consumption', box1: 'Skimming', box2: 'Production', box3: 'Consumption', box4: 'Audit'});

    this.randomCard = this.flashCardsArray[Math.floor(Math.random() * this.flashCardsArray.length)];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EconomicsPage');
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
    this.navCtrl.setRoot(this.navCtrl.getActive().component) ;
  }

}
