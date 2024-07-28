import { HTTP_INTERCEPTORS, HttpClientModule, provideHttpClient } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app.routes";
import { AuthModule } from "./core/auth/auth.module";

@NgModule({
    imports: [
      BrowserModule,
      AppRoutingModule,
      AuthModule
    ],

  })
  export class AppModule { }