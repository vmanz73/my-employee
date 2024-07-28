import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TableComponent } from "./components/table/table.component";

@NgModule({
    declarations: [
      TableComponent
    ],
    imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule
    ],
    exports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      TableComponent,
    ]
  })
  export class SharedModule { }