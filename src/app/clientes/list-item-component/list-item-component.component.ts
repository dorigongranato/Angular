import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Client } from '../../models/client';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-item-component',
  templateUrl: './list-item-component.component.html',
  styleUrls: ['./list-item-component.component.scss']
})
export class ListItemComponentComponent implements OnInit {

  @Input() client: Client;


  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onSelection() {
    this.router.navigate(['clientes', this.client.id]);
  }
}
