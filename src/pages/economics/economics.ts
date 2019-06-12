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
  	this.flashCardsArray.push({front: 'What is APR?', back: 'Annual Percentage Rate', box1: 'Annual Price Raise', box2: 'Annual Percentage Rate', box3: 'Automatic Prime Rate', box4: 'Accelerated Prime Realty'});

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
