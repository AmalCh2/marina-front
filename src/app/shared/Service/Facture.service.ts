import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Consommation } from '../Model/Consommation';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FactureService {
  readonly API_URL = 'http://localhost:8080/facture';

  constructor(private httpClient: HttpClient) { }

  getAllFactures()  : Observable<Consommation[]>{
    return this.httpClient.get<Consommation[]>(`${this.API_URL}/get-all-factures`);
  }

  addFacture(facture: any) {
    return this.httpClient.post(`${this.API_URL}/add-facture`, facture);
  }

  editFacture(facture: any) {
    return this.httpClient.put(`${this.API_URL}/update-facture/${facture.id_fact}`, facture);
  }

  deleteFacture(id: any) {
    return this.httpClient.delete(`${this.API_URL}/delete-facture/${id}`);
  }
}
