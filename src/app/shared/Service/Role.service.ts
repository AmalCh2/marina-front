import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  readonly API_URL = 'http://localhost:8080/role';

  constructor(private httpClient: HttpClient) { }

  getAllRoles() {
    return this.httpClient.get(`${this.API_URL}/get-all-roles`);
  }

  addRole(role: any) {
    return this.httpClient.post(`${this.API_URL}/add-role`, role);
  }

  editRole(role: any) {
    return this.httpClient.put(`${this.API_URL}/update-role`, role);
  }

  deleteRole(id: any) {
    return this.httpClient.delete(`${this.API_URL}/delete-role/${id}`);
  }
}

