import { Component } from '@angular/core';

/**
 * Generated class for the EconomicsFlashCardComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'real-estate-flash-card',
  templateUrl: 'real-estate-flash-card.html'
})
export class RealEstateFlashCardComponent {

	flipped: boolean = false;

	constructor() {}

	flip(){
		this.flipped = !this.flipped;
	}

}
