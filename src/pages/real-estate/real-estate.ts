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
  selector: 'page-real-estate',
  templateUrl: 'real-estate.html',
})
export class RealEstatePage {

  public flashCardsArray: any[] = [];
  public randomCard: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.flashCardsArray.push({front: 'When borrowing money, what is the original amount called?', back: 'Principal', box1: 'Interest', box2: 'Discount', box3: 'Principal', box4: 'Split'});
    this.flashCardsArray.push({front: 'This individual has the responsibilty of assigning a fair value to a property', back: 'Appraiser', box1: 'Realtor', box2: 'Tenant', box3: 'Client', box4: 'Appraiser'});
    this.flashCardsArray.push({front: 'These can laws entitle a property owner to assets located below the property surface.', back: 'Mineral Rights', box1: 'Eminent Domain', box2: 'Mineral Rights', box3: 'Veritical Ownership', box4: 'Vegetation Holds'});
    this.flashCardsArray.push({front: 'When renting out property to another party, the renters are also known as...', back: 'Tenants', box1: 'Tenants', box2: 'Landlords', box3: 'Financiers', box4: 'Spectators'});
    this.flashCardsArray.push({front: 'These investment vehicles allow Real Estate investors to buy a portion of a property.', back: 'Real Estate Investment Trusts (REITs)', box1: 'Rental Income Certificate', box2: 'Real Estate Investment Trusts (REITs)', box3: 'Property Bond', box4: 'Realty Account'});

    this.randomCard = this.flashCardsArray[Math.floor(Math.random() * this.flashCardsArray.length)];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RealEstatePage');
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
