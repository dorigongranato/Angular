import { Pipe, PipeTransform } from '@angular/core';
import { Client } from '../models/client';

@Pipe({
  name: 'searchClients'
})
export class SearchClientsPipe implements PipeTransform {

  transform(clients: Client[], name:string): Client[] {

    if(!clients){
      return null;
    }

    return clients.filter(e =>
      e.nome.toLowerCase().includes(name.toLowerCase()) || e.email.toLowerCase().includes(name.toLowerCase())
    );
  }

}
