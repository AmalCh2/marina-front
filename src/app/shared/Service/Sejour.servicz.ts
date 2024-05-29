import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SejourService {
  readonly API_URL = 'http://localhost:8080/sejour';

  constructor(private httpClient: HttpClient) { }

  getAllSejours() {
    return this.httpClient.get(`${this.API_URL}/get-all-sejours`);
  }

  addSejour(sejour: any) {
    return this.httpClient.post(`${this.API_URL}/add-sejour`, sejour);
  }

  editSejour(sejour: any) {
    return this.httpClient.put(`${this.API_URL}/update-sejour`, sejour);
  }

  deleteSejour(id: any) {
    return this.httpClient.delete(`${this.API_URL}/delete-sejour/${id}`);
  }
}
