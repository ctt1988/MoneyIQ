import { Component } from '@angular/core';

/**
 * Generated class for the EconomicsFlashCardComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'retirement-flash-card',
  templateUrl: 'retirement-flash-card.html'
})
export class RetirementFlashCardComponent {

	flipped: boolean = false;

	constructor() {}

	flip(){
		this.flipped = !this.flipped;
	}

}
