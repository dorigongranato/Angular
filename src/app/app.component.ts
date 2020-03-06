import {Component, OnInit} from '@angular/core';
import { Client } from './models/client';
import { ClientService } from './services/client.service';
import { Pontos } from './models/pontos';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  clients:Observable<Client[]>;
  selectedClientId;
  ponto: Pontos;
  busca = '';

  constructor(private clientService: ClientService,
    private router: Router, private route: ActivatedRoute){

  }

  ngOnInit(): void {
      this.clients = this.clientService.retrieveClients();
      this.router.events
      .subscribe(event => {
        if(event instanceof NavigationEnd){
          this.selectedClientId = this.router.url.split('clientes/')[1];
        }
      });
      // .subscribe(paramMap => this.selectedClientId = paramMap.get('id'));
  }

  onSelected(client:Client):void{
    this.router.navigate(['/clientes', client.id]);
    //console.log(this.ponto);
  }
}
