import { Injectable } from '@angular/core';

import { HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BateauService {
  readonly API_URL = 'http://localhost:8080/bateau';

  constructor(private httpClient: HttpClient) { }

  getAllBateaux() {
    return this.httpClient.get(`${this.API_URL}/get-all-bateaux`)
  }
  addBateau(Bateau : any) {
    return this.httpClient.post(`${this.API_URL}/add-bateau`, Bateau)
  }
  editBateau(Bateau : any){
    return this.httpClient.put(`${this.API_URL}/update-bateau/${Bateau.id_bat }`, Bateau)
  }
  deleteBateau(id : any){
    return  this.httpClient.delete(`${this.API_URL}/delete-bateau/${id}`)
  }
}
