import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReglementService {
  readonly API_URL = 'http://localhost:8080/reglement';

  constructor(private httpClient: HttpClient) { }

  getAllReglements() {
    return this.httpClient.get(`${this.API_URL}/get-all-reglements`);
  }

  addReglement(reglement: any) {
    return this.httpClient.post(`${this.API_URL}/add-reglement`, reglement);
  }

  editReglement(reglement: any) {
    return this.httpClient.put(`${this.API_URL}/update-reglement`, reglement);
  }

  deleteReglement(id: any) {
    return this.httpClient.delete(`${this.API_URL}/delete-reglement/${id}`);
  }
}
