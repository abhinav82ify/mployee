import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'mpl-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {
  @Input() label: string = '';
  @Input() multiple: boolean = false;
  @Input() selectData: any[];

  @Output() change = new EventEmitter<any>();

  selectedData;

  constructor() { }

  ngOnInit(): void {
  }

  onModelChange() {
    this.change.emit(this.selectedData);
  }

}
