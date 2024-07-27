import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, tap } from "rxjs";


@Injectable({
    providedIn: 'root'
  })
export class AuthService {
    private tokenKey = 'authToken';
    private apiUrl = 'https://api.escuelajs.co/api/v1/auth';
  
    constructor(private router: Router, private http :HttpClient) {}
  
    public login(email: string, password: string): Observable<any> {
      return this.http.post<any>(`${this.apiUrl}/login`, { email, password }).pipe(
        tap(response => {
          if (response.token) {
            this.setToken(response.token);
          }
        })
      );
    }
  
    register(email: string, password: string): Observable<any> {
      return this.http.post<any>(`${this.apiUrl}/register`, { email, password });
    }
  
    logout(): void {
      this.removeToken();
      this.router.navigate(['/auth/login']);
    }
  
    isLoggedIn(): boolean {
      const token = this.getToken();
      // Check token validity (you may want to decode and check expiration date)
      return !!token;
    }
  
    private setToken(token: string): void {
      localStorage.setItem(this.tokenKey, token);
    }
  
    public getToken(): string | null {
      return localStorage.getItem(this.tokenKey);
    }
  
    private removeToken(): void {
      localStorage.removeItem(this.tokenKey);
    }
}