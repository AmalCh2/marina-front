import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NatureService {
  readonly API_URL = 'http://localhost:8080/nature';

  constructor(private httpClient: HttpClient) { }

  getAllNatures() {
    return this.httpClient.get(`${this.API_URL}/get-all-natures`);
  }

  addNature(nature: any) {
    return this.httpClient.post(`${this.API_URL}/add-nature`, nature);
  }

  editNature(nature: any) {
    return this.httpClient.put(`${this.API_URL}/update-nature`, nature);
  }

  deleteNature(id: any) {
    return this.httpClient.delete(`${this.API_URL}/delete-nature/${id}`);
  }
}
