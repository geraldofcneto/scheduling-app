import { Customer } from '../customer/customer';

export class Project
{
    projectId: number;
    name: string;
    StartDate: Date;
    EndDate: Date;
    wbs: string;
    customer: Customer;
    sponsor: string;
}