import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PrestationService {
  readonly API_URL = 'http://localhost:8080/prestation';

  constructor(private httpClient: HttpClient) { }

  getAllPrestations() {
    return this.httpClient.get(`${this.API_URL}/get-all-prestations`);
  }

  addPrestation(prestation: any) {
    return this.httpClient.post(`${this.API_URL}/add-prestation`, prestation);
  }

  editPrestation(prestation: any) {
    return this.httpClient.put(`${this.API_URL}/update-prestation`, prestation);
  }

  deletePrestation(id: any) {
    return this.httpClient.delete(`${this.API_URL}/delete-prestation/${id}`);
  }
}
