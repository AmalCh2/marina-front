import { Injectable } from '@angular/core';

import { HttpClient} from '@angular/common/http';
import { Pays } from '../Model/Pays';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PaysService {
  readonly API_URL = 'http://localhost:8080/pays';

  constructor(private httpClient: HttpClient) { }

 
  getAllPays() : Observable<Pays[]>{
    return this.httpClient.get<Pays[]>(`${this.API_URL}/get-all-pays`)
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
