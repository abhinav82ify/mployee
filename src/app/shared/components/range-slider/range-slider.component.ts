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

  @Input() selectedMin;
  @Input() selectedMax;

  constructor() {}

  ngOnInit(): void {}

  onRangeChange() {
    this.rangeChange.emit({
      from: this.selectedMin,
      to: this.selectedMax,
    });
  }
}
