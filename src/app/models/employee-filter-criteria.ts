export interface EmployeeFilterCriteria {
  locations: string[];
  technologies: string[];
  skills: string[];
  minExperience?: number;
  maxExperience?: number;
}

export class EmployeeFilterCriteria implements EmployeeFilterCriteria {
  constructor(criteria?: EmployeeFilterCriteria) {
    this.locations = criteria?.locations || [];
    this.technologies = criteria?.technologies || [];
    this.skills = criteria?.skills || [];
    this.minExperience = criteria?.minExperience || 0;
    this.maxExperience = criteria?.maxExperience || 20;
  }

  isPopulated?() {
    return (
      this.locations.length !== 0 ||
      this.technologies.length !== 0 ||
      this.skills.length !== 0 ||
      this.minExperience !== 0 ||
      this.maxExperience !== 20
    );
  }
}
