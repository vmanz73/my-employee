import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpInterceptorFn } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { request } from "http";
import { Observable } from "rxjs";

export const authInterceptor: HttpInterceptorFn = (request, next) => {
  const token = localStorage.getItem('token') ?? '';
  request = request.clone({
    setHeaders : {
      Authorization: token ? `Token ${token}` : '',
    }
  })

  return next(request);
}