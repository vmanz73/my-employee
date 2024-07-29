import { isPlatformBrowser } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Inject, inject, Injectable, PLATFORM_ID } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, tap } from "rxjs";


@Injectable({
    providedIn: 'root'
  })
export class AuthService {
    private tokenKey = 'token';
    private apiUrl = 'https://api.escuelajs.co/api/v1/auth';
    private isBrowser: boolean;

    constructor(private http: HttpClient, @Inject(PLATFORM_ID) private platformId: Object, private router: Router) {
      this.isBrowser = isPlatformBrowser(this.platformId);
    }
  
    public login(email: string, password: string): Observable<any> {
      return this.http.post<any>(`${this.apiUrl}/login`, { email, password }).pipe(
        tap(response => {
          if (response.access_token) {
            this.setToken(response.access_token);
          }
        })
      );
    }
  
    public logout(): void {
      this.removeToken();
      this.router.navigate(['/auth/login']);
    }
  
    public isLoggedIn(): boolean {
      const token = this.getToken();
      console.log(token);
      
      // Check token validity (you may want to decode and check expiration date)
      return !!token;
    }
  
    private setToken(token: string): void {
      console.log("ere",token);
      
      localStorage.setItem(this.tokenKey, token);
    }
  
    public getToken(): string | null {
      if (this.isBrowser) {
        return localStorage.getItem('token');
      }
      return null;
    }
  
    private removeToken(): void {
      localStorage.removeItem(this.tokenKey);
    }
}