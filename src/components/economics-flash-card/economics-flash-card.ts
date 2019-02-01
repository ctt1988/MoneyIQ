import { Component } from '@angular/core';

/**
 * Generated class for the EconomicsFlashCardComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'economics-flash-card',
  templateUrl: 'economics-flash-card.html'
})
export class EconomicsFlashCardComponent {

	flipped: boolean = false;

	constructor() {}

	flip(){
		this.flipped = !this.flipped;
	}

}
