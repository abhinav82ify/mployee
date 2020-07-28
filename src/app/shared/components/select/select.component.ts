import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'mpl-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {
  @Input() label: string = '';
  @Input() multiple: boolean = false;
  @Input() selectData: string[];

  selectedData;
  placeholder: string = `Select ${this.label}`;

  constructor() { }

  ngOnInit(): void {
  }

}
