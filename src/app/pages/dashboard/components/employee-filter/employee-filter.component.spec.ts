import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeFilterComponent } from './employee-filter.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SharedModule } from '@/app/shared/shared.module';
import { EmployeeFilterService } from '@/app/services/employee-filter/employee-filter.service';
import { of } from 'rxjs';

describe('EmployeeFilterComponent', () => {
  let component: EmployeeFilterComponent;
  let fixture: ComponentFixture<EmployeeFilterComponent>;
  let employeeFilterService: EmployeeFilterService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeFilterComponent],
      imports: [HttpClientTestingModule, SharedModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeFilterComponent);
    component = fixture.componentInstance;

    employeeFilterService = TestBed.get(EmployeeFilterService);
    spyOn(employeeFilterService, 'getEmployeeFilterCriteria').and.returnValue(
      of(defaultEmployeeSearchCriteria)
    );

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get default data for filtering', () => {
    expect(component.employeeFilterCriteria).toEqual(
      defaultEmployeeSearchCriteria
    );
    expect(component.isFilterCriteriaLoading).toBeFalsy();
  });

  it('should update selected locations criteria', () => {
    expect(component.selectedEmployeeFilterCriteria.locations.length).toBe(0);
    component.onLocationChange(['Pune', 'Indore']);
    expect(component.selectedEmployeeFilterCriteria.locations.length).toBe(2);
    expect(component.selectedEmployeeFilterCriteria.locations).toEqual([
      'Pune',
      'Indore',
    ]);
  });

  it('should update selected technologies criteria', () => {
    expect(component.selectedEmployeeFilterCriteria.technologies.length).toBe(
      0
    );
    component.onTechnologyChange(['Angular']);
    expect(component.selectedEmployeeFilterCriteria.technologies.length).toBe(
      1
    );
    expect(component.selectedEmployeeFilterCriteria.technologies).toEqual([
      'Angular',
    ]);
  });

  it('should update selected skills criteria', () => {
    expect(component.selectedEmployeeFilterCriteria.skills.length).toBe(0);
    component.onSkillsChange(['UI']);
    expect(component.selectedEmployeeFilterCriteria.skills.length).toBe(1);
    expect(component.selectedEmployeeFilterCriteria.skills).toEqual(['UI']);
  });

  it('should update selected experience criteria', () => {
    expect(component.selectedEmployeeFilterCriteria.minExperience).toBe(0);
    expect(component.selectedEmployeeFilterCriteria.maxExperience).toBe(20);
    component.onExperienceChange({ from: 4, to: 13 });
    expect(component.selectedEmployeeFilterCriteria.minExperience).toBe(4);
    expect(component.selectedEmployeeFilterCriteria.maxExperience).toBe(13);
  });

  it('should reset selected skill criteria and load employees on clicking cancel', () => {
    component.onLocationChange(['Pune', 'Indore']);
    component.onTechnologyChange(['Angular']);
    component.onSkillsChange(['UI']);
    component.onExperienceChange({ from: 4, to: 13 });

    expect(component.selectedEmployeeFilterCriteria.locations).toEqual([
      'Pune',
      'Indore',
    ]);
    expect(component.selectedEmployeeFilterCriteria.technologies).toEqual([
      'Angular',
    ]);
    expect(component.selectedEmployeeFilterCriteria.skills).toEqual(['UI']);
    expect(component.selectedEmployeeFilterCriteria.minExperience).toBe(4);
    expect(component.selectedEmployeeFilterCriteria.maxExperience).toBe(13);

    spyOn(employeeFilterService, 'updateEmployeeFilterCriteria');
    component.resetFilters();

    expect(component.selectedEmployeeFilterCriteria.locations).toEqual([]);
    expect(component.selectedEmployeeFilterCriteria.technologies).toEqual([]);
    expect(component.selectedEmployeeFilterCriteria.skills).toEqual([]);
    expect(component.selectedEmployeeFilterCriteria.minExperience).toBe(0);
    expect(component.selectedEmployeeFilterCriteria.maxExperience).toBe(20);

    expect(
      employeeFilterService.updateEmployeeFilterCriteria
    ).toHaveBeenCalledWith(component.selectedEmployeeFilterCriteria);
  });
});

const defaultEmployeeSearchCriteria = {
  locations: [
    'Pune',
    'Indore',
    'Bengaluru',
    'Hyderabad',
    'Delhi',
    'Gurgaon',
    'Chennai',
    'Mumbai',
  ],
  technologies: ['Angular', 'React', 'Vue'],
  skills: ['UI', 'UX'],
};
