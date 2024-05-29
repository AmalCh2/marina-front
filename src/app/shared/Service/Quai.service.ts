import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuaiService {
  readonly API_URL = 'http://localhost:8080/quai';

  constructor(private httpClient: HttpClient) { }

  getAllQuais() {
    return this.httpClient.get(`${this.API_URL}/get-all-quais`);
  }

  addQuai(quai: any) {
    return this.httpClient.post(`${this.API_URL}/add-quai`, quai);
  }

  editQuai(quai: any) {
    return this.httpClient.put(`${this.API_URL}/update-quai`, quai);
  }

  deleteQuai(id: any) {
    return this.httpClient.delete(`${this.API_URL}/delete-quai/${id}`);
  }
}
