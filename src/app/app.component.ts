import {Component, OnInit} from '@angular/core';
import { Client } from './models/client';
import { ClientService } from './services/client.service';
import { Pontos } from './models/pontos';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  clients:Observable<Client[]>;
  //clients:Client[] = [];
  selectedClient: Client;
  ponto: Pontos;
  constructor(private clientService: ClientService){

  }

  ngOnInit(): void {
    // this.clientService.retrieveClients().subscribe(clients =>
    //   this.clients = clients
    // )
      this.clients = this.clientService.retrieveClients();
    
  } 

  onSelected(client:Client):void{
    this.selectedClient = client;

    this.clientService.retrievePronto().subscribe(ponto =>
      this.ponto = ponto
    )

    console.log(this.ponto);
  }
}
