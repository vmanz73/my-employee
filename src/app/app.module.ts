import { HTTP_INTERCEPTORS, HttpClientModule, provideHttpClient } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app.routes";
import { AuthModule } from "./core/auth/auth.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";


@NgModule({
    imports: [
      BrowserModule,
      BrowserAnimationsModule,
      AppRoutingModule,
      AuthModule,
    ],

  })
  export class AppModule { }