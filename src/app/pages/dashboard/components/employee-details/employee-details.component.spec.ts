import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDetailsComponent } from './employee-details.component';

import {
  MatDialogModule,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

const stubData: any = {
  employeeData: {
    name: 'Anatola Lokier',
    designation: 'Lead UI Specialist',
    technologies: ['Angular'],
    skills: ['UI'],
    availability: 2,
    baseLocation: 'Hyderabad',
    currentLocation: 'Pune',
    openToRelocate: false,
    yearsOfExperience: 11.8,
  },
};

describe('EmployeeDetailsComponent', () => {
  let component: EmployeeDetailsComponent;
  let fixture: ComponentFixture<EmployeeDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeDetailsComponent],
      imports: [MatDialogModule],
      providers: [
        {
          provide: MatDialogRef,
          useValue: {},
        },
        { provide: MAT_DIALOG_DATA, useValue: stubData },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
