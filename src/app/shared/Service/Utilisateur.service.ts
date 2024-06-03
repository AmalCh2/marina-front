import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";

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
    return this.httpClient.put(`${this.API_URL}/update-utilisateur/${utilisateur.id_utilisateur}`, utilisateur);
  }

  deleteUtilisateur(id: any) {
    return this.httpClient.delete(`${this.API_URL}/delete-utilisateur/${id}`);
  }

  verifyuserPassword(id: any, password: string) {
    return this.httpClient.get<number>(`${this.API_URL}/verifyUserPassword/${id}/${password}`);
  }

  resetpwd(username: any) {
    return this.httpClient.put<void>(`${this.API_URL}/resetpassword/${username}`, {});

  }

}
