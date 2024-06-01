import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Port } from '../Model/Port';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortService {
  readonly API_URL = 'http://localhost:8080/port';

  constructor(private httpClient: HttpClient) { }


  getAllPorts() : Observable<Port[]>{
    return this.httpClient.get<Port[]>(`${this.API_URL}/get-all-ports`);
  }

  addPort(port: any) {
    return this.httpClient.post(`${this.API_URL}/add-port`, port);
  }

  editPort(port: any) {
    return this.httpClient.put(`${this.API_URL}/update-port`, port);
  }

  deletePort(id: any) {
    return this.httpClient.delete(`${this.API_URL}/delete-port/${id}`);
  }
}
