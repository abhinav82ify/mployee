import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';

import { HeaderComponent } from './components/header/header.component';
import { SelectComponent } from './components/select/select.component';
import { RangeSliderComponent } from './components/range-slider/range-slider.component';

@NgModule({
  declarations: [HeaderComponent, SelectComponent, RangeSliderComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgSelectModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSliderModule
  ],
  exports: [HeaderComponent, SelectComponent, RangeSliderComponent],
})
export class SharedModule {}
