import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from '../models/client';
import { environment } from 'src/environments/environment';
import { Pontos } from '../models/pontos';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http:HttpClient) { }

  retrieveClients(): Observable<Client[]>{
    return this.http.get<Client[]>(`${environment.api}/clientes`)
  }

  retrievePronto(): Observable<Pontos>{
    return this.http.get<Pontos>(`${environment.api}/pontos`)
  }

  retrieveClient(clientId:string): Observable<Client>{
    return this.http.get<Client>(`${environment.api}/clientes/${clientId}`)
  }

}
