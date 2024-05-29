import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TypePrestationService {
  readonly API_URL = 'http://localhost:8080/typePrestation';

  constructor(private httpClient: HttpClient) { }

  getAllTypePrestations() {
    return this.httpClient.get(`${this.API_URL}/get-all-typesPrestations`);
  }

  addTypePrestation(typePrestation: any) {
    return this.httpClient.post(`${this.API_URL}/add-typePrestation`, typePrestation);
  }

  editTypePrestation(typePrestation: any) {
    return this.httpClient.put(`${this.API_URL}/update-typePrestation`, typePrestation);
  }

  deleteTypePrestation(id: any) {
    return this.httpClient.delete(`${this.API_URL}/delete-typePrestation/${id}`);
  }
}
