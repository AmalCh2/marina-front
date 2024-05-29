import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TarifService {
  readonly API_URL = 'http://localhost:8080/tarif';

  constructor(private httpClient: HttpClient) { }

  getAllTarifs() {
    return this.httpClient.get(`${this.API_URL}/get-all-tarifs`);
  }

  addTarif(tarif: any) {
    return this.httpClient.post(`${this.API_URL}/add-tarif`, tarif);
  }

  editTarif(tarif: any) {
    return this.httpClient.put(`${this.API_URL}/update-tarif`, tarif);
  }

  deleteTarif(id: any) {
    return this.httpClient.delete(`${this.API_URL}/delete-tarif/${id}`);
  }
}
