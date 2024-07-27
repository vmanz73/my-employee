import { NgModule } from "@angular/core";
import { LoginComponent } from "./login/login.component";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AuthRoutingModule } from "./auth-routing.module";
import {  HttpClientModule, provideHttpClient } from "@angular/common/http";

@NgModule({
    declarations: [
      LoginComponent
    ],
    imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      AuthRoutingModule

    ],
    providers: [provideHttpClient()] // add it here
  })
  export class AuthModule { }