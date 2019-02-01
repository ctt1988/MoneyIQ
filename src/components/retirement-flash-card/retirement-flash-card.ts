import { Component } from '@angular/core';

/**
 * Generated class for the RetirementFlashCardComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'retirement-flash-card',
  templateUrl: 'retirement-flash-card.html'
})
export class RetirementFlashCardComponent {

  text: string;

  constructor() {
    console.log('Hello RetirementFlashCardComponent Component');
    this.text = 'Hello World';
  }

}
