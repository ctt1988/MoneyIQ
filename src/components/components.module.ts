import { NgModule } from '@angular/core';
import { EconomicsFlashCardComponent } from './economics-flash-card/economics-flash-card';
import { PersonalFinanceFlashCardComponent } from './personal-finance-flash-card/personal-finance-flash-card';
import { InvestingFlashCardComponent } from './investing-flash-card/investing-flash-card';
import { RetirementFlashCardComponent } from './retirement-flash-card/retirement-flash-card';
import { RealEstateFlashCardComponent } from './real-estate-flash-card/real-estate-flash-card';
@NgModule({
	declarations: [EconomicsFlashCardComponent,
    PersonalFinanceFlashCardComponent,
    InvestingFlashCardComponent,
    RetirementFlashCardComponent,
    RealEstateFlashCardComponent],
	imports: [],
	exports: [EconomicsFlashCardComponent,
    PersonalFinanceFlashCardComponent,
    InvestingFlashCardComponent,
    RetirementFlashCardComponent,
    RealEstateFlashCardComponent]
})
export class ComponentsModule {}
