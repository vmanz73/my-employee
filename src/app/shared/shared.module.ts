import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatPaginatorModule, } from '@angular/material/paginator';
import { MatTableModule } from "@angular/material/table";
import { TableComponent } from "./components/table/table.component";
import { MatInputModule } from "@angular/material/input";
import { MatCardModule } from "@angular/material/card";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatMenuModule } from "@angular/material/menu";
import { MatIconModule } from "@angular/material/icon"
import { CdkTableModule } from "@angular/cdk/table";
import { MatSortModule } from "@angular/material/sort";



@NgModule({
    declarations: [
      TableComponent
    ],
    imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      MatPaginatorModule,
      MatInputModule,
      MatTableModule,
      MatButtonModule,
      MatCardModule,
      MatGridListModule,
      MatMenuModule,
      MatIconModule,
      MatSortModule
    ],
    exports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      TableComponent,

    ]
  })
  export class SharedModule { }