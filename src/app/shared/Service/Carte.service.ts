import { Injectable } from '@angular/core';

import { HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CarteService {
  readonly API_URL = 'http://localhost:8080/carte';

  constructor(private httpClient: HttpClient) { }

  getAllCartes() {
    return this.httpClient.get(`${this.API_URL}/get-all-cartes`)
  }
  addCarte(Carte : any) {
    return this.httpClient.post(`${this.API_URL}/add-carte`, Carte)
  }
  editCarte(Carte : any){
    return this.httpClient.put(`${this.API_URL}/update-carte`, Carte)
  }
  deleteCarte(id : any){
    return  this.httpClient.delete(`${this.API_URL}/delete-carte/${id}`)
  }
}
