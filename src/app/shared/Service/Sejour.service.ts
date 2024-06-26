import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Sejour } from '../Model/Sejour';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SejourService {
  readonly API_URL = 'http://localhost:8080/sejour';

  constructor(private httpClient: HttpClient) { }

  getAllSejours()  : Observable<Sejour[]>{
    return this.httpClient.get<Sejour[]>(`${this.API_URL}/get-sejours`);
  }

  getArchivedSejours()  : Observable<Sejour[]>{
    return this.httpClient.get<Sejour[]>(`${this.API_URL}/get-archieved-sejours`);
  }

  addSejour(sejour: any) {
    return this.httpClient.post(`${this.API_URL}/add-sejour`, sejour);
  }

  editSejour(sejour: any) {
    return this.httpClient.put(`${this.API_URL}/update-sejour/${sejour.id_sej }`, sejour);
  }

  deleteSejour(id: any) {
    return this.httpClient.delete(`${this.API_URL}/delete-sejour/${id}`);
  }

  archiveSejour(id: number): Observable<void> {
    return this.httpClient.put<void>(`${this.API_URL}/archive/${id}`, {});
  }
}
