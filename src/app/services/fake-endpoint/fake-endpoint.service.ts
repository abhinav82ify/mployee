import { Injectable } from '@angular/core';

import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';

import { allEmployees, allLocations, allSkills, allTechnologies } from './mock-data';

@Injectable({
  providedIn: 'root'
})
export class FakeEndpointService implements InMemoryDbService {

  constructor() { }

  createDb(reqInfo?: RequestInfo) {
    const employees = allEmployees;
    const locations = allLocations;
    const skills = allSkills;
    const technologies = allTechnologies;

    return { employees, locations, skills, technologies };
  }
}
