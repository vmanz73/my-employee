import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { EmployeeListComponent } from "./coponents/employee-list/employee-list.component";
import { EmployeeRoutingModule } from "./employee-routing.module";
import { TableComponent } from "../../shared/components/table/table.component";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../../shared/shared.module";
import { EmployeeFormComponent } from "./coponents/employee-form/employee-form.component";

@NgModule({
    declarations: [
      EmployeeListComponent,
      EmployeeFormComponent
    ],
    imports: [
    //   BrowserModule,
      EmployeeRoutingModule,
      HttpClientModule,
      FormsModule,
      CommonModule,
      SharedModule,
      ReactiveFormsModule
    ]
  })
  export class EmployeeModule { }