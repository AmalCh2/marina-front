import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TvaService {
  readonly API_URL = 'http://localhost:8080/tva';

  constructor(private httpClient: HttpClient) { }

  getAllTvas() {
    return this.httpClient.get(`${this.API_URL}/get-all-tvas`);
  }

  addTva(tva: any) {
    return this.httpClient.post(`${this.API_URL}/add-tva`, tva);
  }

  editTva(tva: any) {
    return this.httpClient.put(`${this.API_URL}/update-tva`, tva);
  }

  deleteTva(id: any) {
    return this.httpClient.delete(`${this.API_URL}/delete-tva/${id}`);
  }
}
