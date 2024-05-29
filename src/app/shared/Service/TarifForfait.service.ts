import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TarifForfaitService {
  readonly API_URL = 'http://localhost:8080/tarifForfait';

  constructor(private httpClient: HttpClient) { }

  getAllTarifForfaits() {
    return this.httpClient.get(`${this.API_URL}/get-all-tarifsForfaits`);
  }

  addTarifForfait(tarifForfait: any) {
    return this.httpClient.post(`${this.API_URL}/add-tarifForfait`, tarifForfait);
  }

  editTarifForfait(tarifForfait: any) {
    return this.httpClient.put(`${this.API_URL}/update-tarifForfait`, tarifForfait);
  }

  deleteTarifForfait(id: any) {
    return this.httpClient.delete(`${this.API_URL}/delete-tarifForfait/${id}`);
  }
}
