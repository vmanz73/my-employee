import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { EmployeeService } from '../../../core/services/employee/employee.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent<T> implements OnInit, OnChanges {
  @Input() data: T[] = [];
  @Input() columns: { key: keyof T, label: string }[] = [];
  @Input() totalItems = 0;
  @Input() itemsPerPage = 5;
  @Input() currentPage = 1;

  @Output() pageChange = new EventEmitter<number>();

  constructor(private employeeService:EmployeeService){}

  totalPages = 0;

  ngOnInit(): void {
    this.calculateTotalPages();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['totalItems'] || changes['itemsPerPage']) {
      this.calculateTotalPages();
    }
  }

  calculateTotalPages(): void {
    this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
  }

  onPageChange(page: number): void {
    if (page < 1 || page > this.totalPages) {
      return;
    }
    this.currentPage = page;
    this.pageChange.emit(this.currentPage);
  }

  getEmployees(page: number): void {
    this.employeeService.getEmployees(page, this.itemsPerPage).subscribe((response) => {
      console.log(response);
      
    });
  }
}
