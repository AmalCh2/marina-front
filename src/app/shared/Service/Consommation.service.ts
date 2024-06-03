import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Consommation } from '../Model/Consommation';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsommationService {
  readonly API_URL = 'http://localhost:8080/consommation';

  constructor(private httpClient: HttpClient) { }

  getAllConsommations() : Observable<Consommation[]>{
    return this.httpClient.get<Consommation[]>(`${this.API_URL}/get-all-consommations`);
  }

  addConsommation(consommation: any) {
    return this.httpClient.post(`${this.API_URL}/add-consommation`, consommation);
  }

  editConsommation(consommation: any) {
    return this.httpClient.put(`${this.API_URL}/update-consommation/${consommation.id_cons}`, consommation);
  }

  deleteConsommation(id: any) {
    return this.httpClient.delete(`${this.API_URL}/delete-consommation/${id}`);
  }
}
