import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  readonly API_URL = 'http://localhost:8080/reservation';

  constructor(private httpClient: HttpClient) { }

  getAllReservations() {
    return this.httpClient.get(`${this.API_URL}/get-all-reservations`);
  }

  addReservation(reservation: any) {
    return this.httpClient.post(`${this.API_URL}/add-reservation`, reservation);
  }

  editReservation(reservation: any) {
    return this.httpClient.put(`${this.API_URL}/update-reservation`, reservation);
  }

  deleteReservation(id: any) {
    return this.httpClient.delete(`${this.API_URL}/delete-reservation/${id}`);
  }
}
