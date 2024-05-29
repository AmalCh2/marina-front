import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {
  readonly API_URL = 'http://localhost:8080/utilisateur';

  constructor(private httpClient: HttpClient) { }

  getAllUtilisateurs() {
    return this.httpClient.get(`${this.API_URL}/get-all-utilisateurs`);
  }

  addUtilisateur(utilisateur: any) {
    return this.httpClient.post(`${this.API_URL}/add-utilisateur`, utilisateur);
  }

  editUtilisateur(utilisateur: any) {
    return this.httpClient.put(`${this.API_URL}/update-utilisateur`, utilisateur);
  }

  deleteUtilisateur(id: any) {
    return this.httpClient.delete(`${this.API_URL}/delete-utilisateur/${id}`);
  }
}
