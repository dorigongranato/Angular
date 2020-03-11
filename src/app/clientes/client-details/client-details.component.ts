import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Client } from '../../models/client';
import { ClientService } from '../../services/client.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { FormattedCpfPipe } from '../../pipes/formatted-cpf.pipe';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.scss']
})
export class ClientDetailsComponent implements OnInit {
  @Input() clientId: string;
  @Output() back: EventEmitter<any> = new EventEmitter()
  client$: Observable<Client>;

  constructor(private clientService:ClientService,  private router: Router) { }

  ngOnInit(): void {
    this.retrivieClient();
  }

  onBack() {
    // this.back.emit();
    this.router.navigateByUrl("/clientes");
  }

  private retrivieClient() {
    this.client$ = this.clientService.retrieveClient(this.clientId);
  }
}
