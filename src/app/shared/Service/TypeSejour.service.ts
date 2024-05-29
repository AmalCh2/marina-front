import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TypeSejourService {
  readonly API_URL = 'http://localhost:8080/typeSejour';

  constructor(private httpClient: HttpClient) { }

  getAllTypeSejours() {
    return this.httpClient.get(`${this.API_URL}/get-all-typesSejours`);
  }

  addTypeSejour(typeSejour: any) {
    return this.httpClient.post(`${this.API_URL}/add-typeSejour`, typeSejour);
  }

  editTypeSejour(typeSejour: any) {
    return this.httpClient.put(`${this.API_URL}/update-typeSejour`, typeSejour);
  }

  deleteTypeSejour(id: any) {
    return this.httpClient.delete(`${this.API_URL}/delete-typeSejour/${id}`);
  }
}
