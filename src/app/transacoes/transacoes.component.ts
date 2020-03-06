import {Component, OnInit} from '@angular/core';

const ELEMENT_DATA: any[] = [
  {loja: '---', nota: '---', cadastro: '---', valor: '---'}
];

@Component({
  selector: 'app-transacoes',
  templateUrl: './transacoes.component.html',
  styleUrls: ['./transacoes.component.scss']
})
export class TransacoesComponent implements OnInit {
  displayedColumns = ['loja', 'nota', 'cadastro', 'valor'];
  dataSource = ELEMENT_DATA;
  constructor() {
  }

  ngOnInit() {
  }

}
