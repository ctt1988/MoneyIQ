import { Component } from '@angular/core';

/**
 * Generated class for the PersonalFinanceFlashCardComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'personal-finance-flash-card',
  templateUrl: 'personal-finance-flash-card.html'
})
export class PersonalFinanceFlashCardComponent {

  text: string;

  constructor() {
    console.log('Hello PersonalFinanceFlashCardComponent Component');
    this.text = 'Hello World';
  }

}
