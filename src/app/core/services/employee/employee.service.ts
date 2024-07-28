import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Employee } from "../../models/employe";

@Injectable({
    providedIn: 'root'
  })
  export class EmployeeService {
    private apiUrl = 'https://api.mockfly.dev/mocks/fe22a481-d762-4c9a-a1ba-102fdc00e5ee/employees';
  
    constructor(private http: HttpClient) {}
  
    getEmployees(page: number, limit: number): Observable<any> {
        const params = { page: page.toString(), limit: limit.toString() };
        console.log("rfdewf");
        
        return this.http.get<any>(this.apiUrl, { params });
      }
  }