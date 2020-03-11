import {Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/Operators';

const ELEMENT_DATA: any[] = [
  {loja: '---', nota: '---', dataCadastro: '---', valor: '---', formaPagamento:'---', action:''}
];

@Component({
  selector: 'app-transacoes',
  templateUrl: './transacoes.component.html',
  styleUrls: ['./transacoes.component.scss']
})
export class TransacoesComponent implements OnInit {
  displayedColumns = ['loja', 'nota', 'dataCadastro', 'valor', 'formaPagamento', 'actions'];
  dataSource = ELEMENT_DATA;

  form: FormGroup = new FormGroup({
    loja: new FormControl(),
    nota: new FormControl(),
    dataCadastro: new FormControl(),
    valor: new FormControl(),
    formaPagamento: new FormControl()
  });

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.form.disable();
    this.route.paramMap.subscribe((paramMap) => {
      if(paramMap.get('id')){
        this.form.enable();
      }else{
        this.form.disable();
      }
    }
    )

    this.form.get('loja').valueChanges.pipe(debounceTime(2000)).subscribe(console.log);

  }

  onSubmit(){

    const {loja, nota, dataCadastro, valor, formaPagamento} = this.form.value;

    if(this.form.valid){
      if(this.dataSource.some(item => item.loja.includes('---'))){
        this.dataSource = [{loja, nota, dataCadastro, valor, formaPagamento}];
      }else{
        this.dataSource = [...this.dataSource, {loja, nota, dataCadastro, valor, formaPagamento}]
      }
      this.form.reset({valor:'555'});
    }
  }

  onEdit(index: number){
    console.log('Edit')
    const {loja, nota, dataCadastro, valor, formaPagamento} = this.dataSource[index];
    this.form.setValue({loja, nota, dataCadastro, valor, formaPagamento});
  }

}
