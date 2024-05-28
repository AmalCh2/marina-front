import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AxiosService {

  private baseUrl = "http://localhost:8080/";

  constructor(private http: HttpClient) {}

  request(method: string, url: string, data: any): Promise<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.request(method, this.baseUrl + url, {
      body: data,
      headers: headers
    }).toPromise();
  }
}
