import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild, ViewEncapsulation } from '@angular/core';
import { EmployeeService } from '../../../core/services/employee/employee.service';
import { PageEvent } from '@angular/material/paginator';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {Sort, MatSortModule, MatSort, SortDirection} from '@angular/material/sort';
import { log } from 'console';
import { LiveAnnouncer } from '@angular/cdk/a11y';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent<T> implements OnInit, OnChanges {


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: false }) matSort!: MatSort;

  @Input() data: T[] = [];
  @Input() columns: { key: keyof T, label: string }[] = [];
  @Input() totalItems = 0;
  @Input() itemsPerPage = 5;
  @Input() currentPage = 1;



  displayedColumns: string[] = ['risk_plan', 'questionnairre', 'modified', 'star'];
  
  dataSource = new MatTableDataSource<any>(ELEMENT_DATA);
  datas: PeriodicElement[] = ELEMENT_DATA
  @Output() pageChange = new EventEmitter<number>();
  sortedData!: PeriodicElement[];

  

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor(private employeeService:EmployeeService, private _liveAnnouncer: LiveAnnouncer){}
  pageSize = 10;

  ngOnInit(): void {
    this.calculateTotalPages();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['totalItems'] || changes['itemsPerPage']) {
      this.calculateTotalPages();
    }
  }

  calculateTotalPages(): void {
    this.totalItems = Math.ceil(this.totalItems / this.itemsPerPage);
  }

  onPageChange(page: number): void {
    if (page < 1 || page > this.totalItems) {
      return;
    }
    this.currentPage = page;
    this.pageChange.emit(this.currentPage);
  }


  pageChanged(event: PageEvent) {
    this.currentPage = event.pageIndex;
    console.log(this.dataSource);
    this.dataSource.connect().subscribe(data => {
      // Access the rendered data here
      this.datas = data
    });
    console.log(event);
    
    // this.items = this.getData(this.currentPage, this.pageSize);
  }
  
  applyFilter(event: Event) {
    this.dataSource.filter =  (event.target as HTMLInputElement).value;

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }

    this.renderData();
  }

  announceSortChange(sortState: any) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }

    this.dataSource.sort = sortState

    this.renderData();
  }


  sortData() {
  
    this.dataSource.sort = this.matSort;

    this.renderData();
    
    
  }

  renderData(){
    this.dataSource.connect().subscribe(data => {
      // Access the rendered data here
      this.datas = data
    });
  }

  
}

export interface PeriodicElement {
  risk_plan: string;
  questionnairre: string;
  modified: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {risk_plan: 'Pellentesque habitant',          questionnairre: 'Hydrogen', modified: '10 jan 2019'},
  {risk_plan: 'Morbi tristique senectus',       questionnairre: 'Helium',   modified: '9 jan 2019'},
  {risk_plan: 'Et netus et malesuada',          questionnairre: 'Hydrogen', modified: '8 jan 2019'},
  {risk_plan: 'Fames ac turpis egestas',        questionnairre: 'Hydrogen', modified: '7 jan 2019'},
  {risk_plan: 'Vestibulum tortor quam',         questionnairre: 'Carbon',   modified: '6 jan 2019'},
  {risk_plan: 'Feugiat vitae',                  questionnairre: 'Carbon',   modified: '5 jan 2019'},
  {risk_plan: 'Ultricies eget',                 questionnairre: 'Carbon',   modified: '4 jan 2019'},
  {risk_plan: 'Tempor sit',                     questionnairre: 'Helium',   modified: '3 jan 2019'},
  {risk_plan: 'Amet ante',                      questionnairre: 'Carbon',   modified: '2 jan 2019'},
  {risk_plan: 'Donec eu libero sit amet quam',  questionnairre: 'Carbon',   modified: '1 jan 2019'},
  {risk_plan: 'Egestas semper',                 questionnairre: 'Hydrogen', modified: '31 dec 2018'},
  {risk_plan: 'Aenean ultricies mi vitae est',  questionnairre: 'Helium',   modified: '30 dec 2018'},
  {risk_plan: 'Mauris placerat',                questionnairre: 'Hydrogen', modified: '29 dec 2018'},
  {risk_plan: 'Eleifend leo',                   questionnairre: 'Helium',   modified: '28 dec 2018'},
  {risk_plan: 'Quisque sit amet',               questionnairre: 'Helium',   modified: '27 dec 2018'},
  {risk_plan: 'Est et sapien',                  questionnairre: 'Carbon',   modified: '26 dec 2018'},
  {risk_plan: 'Ullamcorper pharetra',           questionnairre: 'Hydrogen', modified: '25 dec 2018'},
  {risk_plan: 'Vestibulum erat wisi',           questionnairre: 'Helium',   modified: '24 dec 2018'},
  {risk_plan: 'Condimentum sed',                questionnairre: 'Carbon',   modified: '23 dec 2018'},
  {risk_plan: 'Commodo vitae',                  questionnairre: 'Hydrogen', modified: '22 dec 2018'},
];
