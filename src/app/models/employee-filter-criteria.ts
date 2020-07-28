export interface EmployeeFilterCriteria {
    locations: string[];
    technologies: string[];
    skills: string[];
    minExperience?: number;
    maxExperience?: number;
}

export class EmployeeFilterCriteria implements EmployeeFilterCriteria {
    constructor() {
        this.locations = [];
        this.technologies = [];
        this.skills = [];
    }
}
