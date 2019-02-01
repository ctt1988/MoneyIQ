import { Component } from '@angular/core';

/**
 * Generated class for the EconomicsFlashCardComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'personal-finance-flash-card',
  templateUrl: 'personal-finance-flash-card.html'
})
export class PersonalFinanceFlashCardComponent {

	flipped: boolean = false;

	constructor() {}

	flip(){
		this.flipped = !this.flipped;
	}

}
