import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Prestation } from '../Model/Prestation';

@Injectable({
  providedIn: 'root'
})
export class PrestationService {
  readonly API_URL = 'http://localhost:8080/prestation';

  constructor(private httpClient: HttpClient) { }

  getAllPrestations()  : Observable<Prestation[]>{
    return this.httpClient.get<Prestation[]>(`${this.API_URL}/get-all-prestations`);
  }

  addPrestation(prestation: any) {
    return this.httpClient.post(`${this.API_URL}/add-prestation`, prestation);
  }

  editPrestation(prestation: any) {
    return this.httpClient.put(`${this.API_URL}/update-prestation/${prestation.id_prest}`, prestation);
  }

  deletePrestation(id: any) {
    return this.httpClient.delete(`${this.API_URL}/delete-prestation/${id}`);
  }
}
