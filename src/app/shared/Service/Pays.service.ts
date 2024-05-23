import { Injectable } from '@angular/core';

import { HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PaysService {
  readonly API_URL = 'http://172.10.0.140:8080/pays';

  constructor(private httpClient: HttpClient) { }

  getAllPays() {
    return this.httpClient.get(`${this.API_URL}/get-all-pays`)
  }
  addPays(Pays : any) {
    return this.httpClient.post(`${this.API_URL}/add-pays`, Pays)
  }
  editPays(Pays : any){
    return this.httpClient.put(`${this.API_URL}/update-pays`, Pays)
  }
  deletePays(id : any){
    return  this.httpClient.delete(`${this.API_URL}/delete-pays/${id}`)
  }
}
