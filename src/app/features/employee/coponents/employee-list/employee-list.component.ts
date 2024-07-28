import { Component, OnInit } from "@angular/core";
import { Employee } from "../../../../core/models/employe";
import { EmployeeService } from "../../../../core/services/employee/employee.service";

@Component({
    selector: 'app-employee-list',
    templateUrl: './employee-list.component.html',
  })
  export class EmployeeListComponent implements OnInit {
    employees: Employee[] = [];
    columns: { key: keyof Employee, label: string }[] = [
      { key: 'id', label: 'ID' },
      { key: 'firstName', label: 'First Name' },
      { key: 'lastName', label: 'Last Name' },
      { key: 'email', label: 'Email' },
      { key: 'jobTitle', label: 'Job Title' },
      { key: 'department', label: 'Department' }
    ];
    currentPage = 1;
    itemsPerPage = 5;
    totalItems = 0;
  
    constructor(private employeeService: EmployeeService) {}
  
    ngOnInit(): void {
      this.getEmployees(this.currentPage);
    }
  
    getEmployees(page: number): void {
      this.employeeService.getEmployees(page, this.itemsPerPage).subscribe((response) => {
        console.log(response);
        
      });
    }
  
    onPageChange(page: number): void {
      this.currentPage = page;
      this.getEmployees(this.currentPage);
    }
  }