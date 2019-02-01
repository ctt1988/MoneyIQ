import { Component } from '@angular/core';

/**
 * Generated class for the EconomicsFlashCardComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'investing-flash-card',
  templateUrl: 'investing-flash-card.html'
})
export class InvestingFlashCardComponent {

	flipped: boolean = false;

	constructor() {}

	flip(){
		this.flipped = !this.flipped;
	}

}
