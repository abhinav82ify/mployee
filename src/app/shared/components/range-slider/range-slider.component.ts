import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mpl-range-slider',
  templateUrl: './range-slider.component.html',
  styleUrls: ['./range-slider.component.scss']
})
export class RangeSliderComponent implements OnInit {
  @Input() label: string = '';
  @Input() min: number;
  @Input() max: number;

  minValue = this.min;
  maxValue = this.max;

  constructor() { }

  ngOnInit(): void {
  }

}
