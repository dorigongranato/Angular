import {Component, OnInit} from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AppValidator } from './app-validator';

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
  busca = '';

  form: FormGroup = this.fb.group({
    nota: this.fb.control('', Validators.required),
    cpf: this.fb.control('', AppValidator.cpfValidator)
  })

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
  }

  onSubmit(event: any){
    console.log(event);
    console.log(this.form.value);
  }

}
