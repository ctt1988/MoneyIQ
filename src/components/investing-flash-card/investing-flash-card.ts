import { Component } from '@angular/core';

/**
 * Generated class for the InvestingFlashCardComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'investing-flash-card',
  templateUrl: 'investing-flash-card.html'
})
export class InvestingFlashCardComponent {

  text: string;

  constructor() {
    console.log('Hello InvestingFlashCardComponent Component');
    this.text = 'Hello World';
  }

}
