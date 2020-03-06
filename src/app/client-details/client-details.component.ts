import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Client } from "../models/client";
import { ActivatedRoute, Router } from "@angular/router";
import { ClientService } from "../services/client.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-client-details",
  templateUrl: "./client-details.component.html",
  styleUrls: ["./client-details.component.scss"]
})
export class ClientDetailsComponent implements OnInit {
  @Input() clientId: string;
  client$: Observable<Client>;

  constructor(private clientService: ClientService, private router: Router) {}

  ngOnInit(): void {
    this.retrivieClient();
  }

  onBack() {
    this.router.navigateByUrl("/clientes");
  }

  private retrivieClient() {
    this.client$ = this.clientService.retrieveClient(this.clientId);
  }
}
