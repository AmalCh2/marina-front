import { Injectable } from '@angular/core';

import { HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TypeBateauService {
  readonly API_URL = 'http://localhost:8080/typeBateau';

  constructor(private httpClient: HttpClient) { }

  getAllTypeBateau() {
    return this.httpClient.get(`${this.API_URL}/get-all-typesBateaux`)
  }
  addTypeBateau(TypeBateau : any) {
    return this.httpClient.post(`${this.API_URL}/add-typeBateau`, TypeBateau)
  }
  editTypeBateau(TypeBateau : any){
    return this.httpClient.put(`${this.API_URL}/update-typeBateau`, TypeBateau)
  }
  deleteTypeBateau(id : any){
    return  this.httpClient.delete(`${this.API_URL}/delete-typeBateau/${id}`)
  }
}