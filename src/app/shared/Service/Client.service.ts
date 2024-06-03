import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from '../Model/Client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  readonly API_URL = 'http://localhost:8080/client';

  constructor(private httpClient: HttpClient) { }


  
  getAllClients() : Observable<Client[]>{
    return this.httpClient.get<Client[]>(`${this.API_URL}/get-archieved-clients`);
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

  archiveClient(id: number): Observable<void> {
    return this.httpClient.put<void>(`${this.API_URL}/archive/${id}`, {});
  }
}
