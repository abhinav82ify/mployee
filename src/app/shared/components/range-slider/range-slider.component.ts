import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mpl-range-slider',
  templateUrl: './range-slider.component.html',
  styleUrls: ['./range-slider.component.scss'],
})
export class RangeSliderComponent implements OnInit {
  @Input() label: string = '';
  @Input() min: number;
  @Input() max: number;

  @Output() rangeChange = new EventEmitter<any>();

  minValue;
  maxValue;

  constructor() {}

  ngOnInit(): void {
    this.minValue = this.min;
    this.maxValue = this.max;
  }

  onRangeChange() {
    this.rangeChange.emit({
      from: this.minValue,
      to: this.maxValue,
    });
  }
}
