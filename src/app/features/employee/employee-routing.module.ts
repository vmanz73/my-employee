import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { EmployeeListComponent } from "./coponents/employee-list/employee-list.component";
import { AuthGuard } from "../../core/guards/auth.guard";

const routes: Routes = [
    { path: '', component: EmployeeListComponent, canActivate: [AuthGuard]  },
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class EmployeeRoutingModule { }