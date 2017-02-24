import { Injectable } from '@angular/core';

import { Project } from './project'
import { PROJECTS } from "../shared/mock";


@Injectable()
export class ProjectService{
    getCostumer(): Project[]{
        return PROJECTS;
    }

     getProject(id: number): Project{
        return PROJECTS.find(r => r.id == id);
    }
}