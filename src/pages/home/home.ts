import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public quotesArray: any[] = [];
  public randomQuote: any;

  constructor(public navCtrl: NavController) {
  	this.quotesArray.push({quote: 'Price is what you pay. Value is what you get.', author:'-Warren Buffet'});
    this.quotesArray.push({quote: 'It\'s far better to buy a wonderful company at a fair price than a fair company at a wonderful price.', author:'-Warren Buffet'});
    this.quotesArray.push({quote: 'An investment in knowledge pays the best interest.', author:'-Ben Franklin'});
    this.quotesArray.push({quote: 'Bottoms in the investment world don\'t end with four-year lows; they end with 10 or 15 year lows', author:'-Jim Rogers'});
    this.quotesArray.push({quote: 'In investing, what is comfortable is rarely profitable.', author:'-Robert Arnott'});
    this.quotesArray.push({quote: 'Every once in a while, the market does something so stupid it takes your breath away.', author:'-Jim Cramer'});
    this.quotesArray.push({quote: 'Know what you own, and know why you own it.', author:'-Peter Lynch'});
    this.quotesArray.push({quote: 'You get recessions, you have stock market declines. If you don\'t understand that\'s going to happen, then you\'re not ready, you won\'t do well in the markets.', author:'-Peter Lynch'});
    this.quotesArray.push({quote: 'Investing should be like watching paint dry or watching grass grow. If you want excitement…go to Las Vegas.', author:'-Paul Samuelson'});
    this.quotesArray.push({quote: 'The investor\’s chief problem and even his worst enemy is likely to be himself.', author:'-Benjamin Graham'});

    this.randomQuote = this.quotesArray[Math.floor(Math.random() * this.quotesArray.length)];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

}
