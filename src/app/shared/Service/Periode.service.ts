import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PeriodeService {
  readonly API_URL = 'http://localhost:8080/period';

  constructor(private httpClient: HttpClient) { }

  getAllPeriodes() {
    return this.httpClient.get(`${this.API_URL}/get-all-periodes`);
  }

  addPeriode(periode: any) {
    return this.httpClient.post(`${this.API_URL}/add-period`, periode);
  }

  editPeriode(periode: any) {
    return this.httpClient.put(`${this.API_URL}/update-period`, periode);
  }

  deletePeriode(id: any) {
    return this.httpClient.delete(`${this.API_URL}/delete-period/${id}`);
  }
}
