import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PeriodeService {
  readonly API_URL = 'http://localhost:8080/periode';

  constructor(private httpClient: HttpClient) { }

  getAllPeriodes() {
    return this.httpClient.get(`${this.API_URL}/get-all-periodes`);
  }

  addPeriode(periode: any) {
    return this.httpClient.post(`${this.API_URL}/add-periode`, periode);
  }

  editPeriode(periode: any) {
    return this.httpClient.put(`${this.API_URL}/update-periode`, periode);
  }

  deletePeriode(id: any) {
    return this.httpClient.delete(`${this.API_URL}/delete-periode/${id}`);
  }
}
