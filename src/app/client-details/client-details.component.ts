import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Client } from '../models/client';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.scss']
})
export class ClientDetailsComponent implements OnInit {
  
  @Input() client:Client;
  @Output() BackClient: EventEmitter<Client> = new EventEmitter();
  //@Output() onBackClient: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onBack(){
    this.BackClient.emit();
    
  }

}
