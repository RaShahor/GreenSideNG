import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Signer } from '../models/signer';
import { Person } from '../models/person';

@Injectable({
  providedIn: 'root'
})
export class SignerService {

  baseURL = 'Manager';

  constructor(private http: HttpClient) { }

  getSigners(id: number): Observable<Signer[]> {
    return this.http.get<Signer[]>(`${this.baseURL}${id}Signer`)
  }
}