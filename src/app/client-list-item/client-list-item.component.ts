import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Client } from '../models/client';


@Component({
  selector: 'app-client-list-item',
  templateUrl: './client-list-item.component.html',
  styleUrls: ['./client-list-item.component.scss']
})
export class ClientListItemComponent implements OnInit {
  
  @Input() client: Client;
  @Output() selectedClientId: EventEmitter<Client> = new EventEmitter()
  
  constructor() { }

  ngOnInit(): void {

  }

  onSelection(){
    this.selectedClientId.emit(this.client);
  }

}