import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  readonly API_URL = 'http://localhost:8080/client';

  constructor(private httpClient: HttpClient) { }

  getAllClients() {
    return this.httpClient.get(`${this.API_URL}/get-all-clients`);
  }

  addClient(client: any) {
    return this.httpClient.post(`${this.API_URL}/add-client`, client);
  }

  editClient(client: any) {
    return this.httpClient.put(`${this.API_URL}/update-client`, client);
  }

  deleteClient(id: any) {
    return this.httpClient.delete(`${this.API_URL}/delete-client/${id}`);
  }
}
