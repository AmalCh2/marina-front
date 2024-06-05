import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmplacementService {
  readonly API_URL = 'http://localhost:8080/emplacement';

  constructor(private httpClient: HttpClient) { }

  getAllEmplacements() {
    return this.httpClient.get(`${this.API_URL}/get-all-emplacements`);
  }

  addEmplacement(emplacement: any) {
    return this.httpClient.post(`${this.API_URL}/add-emplacement`, emplacement);
  }

  editEmplacement(emplacement: any) {
    return this.httpClient.put(`${this.API_URL}/update-emplacement/${emplacement.id_emp}`, emplacement);
  }

  deleteEmplacement(id: any) {
    return this.httpClient.delete(`${this.API_URL}/delete-emplacement/${id}`);
  }
}
