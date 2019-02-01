import { Component } from '@angular/core';

/**
 * Generated class for the RealEstateFlashCardComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'real-estate-flash-card',
  templateUrl: 'real-estate-flash-card.html'
})
export class RealEstateFlashCardComponent {

  text: string;

  constructor() {
    console.log('Hello RealEstateFlashCardComponent Component');
    this.text = 'Hello World';
  }

}
