import { HTTP_INTERCEPTORS, HttpClientModule, provideHttpClient } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app.routes";
import { AuthModule } from "./core/auth/auth.module";
import { AuthInterceptor } from "./core/interceptors/auth.interceptor";

@NgModule({
    imports: [
      BrowserModule,
      AppRoutingModule,
      AuthModule
    ],
    providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
    ],

  })
  export class AppModule { }