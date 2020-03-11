import {Component, OnInit, OnDestroy} from '@angular/core';
import {Observable, ReplaySubject} from 'rxjs';
import {Client} from '../models/client';
import {ClientService} from '../services/client.service';
import {Router, NavigationEnd, ActivatedRoute} from '@angular/router';
import { takeUntil } from 'rxjs/Operators';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit, OnDestroy {

  clients: Observable<Client[]>;
  selectedClientId;
  busca;

  private destroyed$: ReplaySubject<boolean> = new ReplaySubject();

  constructor(private clientService: ClientService, private router: Router, private route: ActivatedRoute) {}

  //Criar o frmBuilder

  ngOnInit(): void {
    this.clients = this.clientService.retrieveClients();
    this.route.paramMap.pipe(takeUntil(this.destroyed$)).subscribe(paramMap => this.selectedClientId = paramMap.get('id'));
  }

  ngOnDestroy(){
    this.destroyed$.next(true)
    this.destroyed$.complete()
  }
}
