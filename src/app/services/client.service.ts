import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Client } from '../models/client';
import { Observable } from 'rxjs';
import { Point } from '../models/point';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }

  retrieveClients(): Observable<Client[]> {
    return this.http.get<Client[]>(`http://localhost:4000/users`);
  }

  retrieveClientPoints(): Observable<Point> {
    return this.http.get<Point>(`${environment.api}/pontos`);
  }
  retrieveClient(clientId: string): Observable<Client> {
    return this.http.get<Client>(`${environment.api}/users/${clientId}`);
  }
}
