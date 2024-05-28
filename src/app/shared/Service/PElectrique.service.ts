import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PElectriqueService {
  readonly API_URL = 'http://localhost:8080/p_electrique';

  constructor(private httpClient: HttpClient) { }

  getAllPElectriques() {
    return this.httpClient.get(`${this.API_URL}/get-all-p_electriques`);
  }

  addPElectrique(pelectrique: any) {
    return this.httpClient.post(`${this.API_URL}/add-p_electrique`, pelectrique);
  }

  editPElectrique(pelectrique: any) {
    return this.httpClient.put(`${this.API_URL}/update-p_electrique`, pelectrique);
  }

  deletePElectrique(id: any) {
    return this.httpClient.delete(`${this.API_URL}/delete-p_electrique/${id}`);
  }
}
