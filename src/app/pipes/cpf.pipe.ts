import { Pipe, PipeTransform } from '@angular/core';
import * as cpf from "@fnando/cpf";

@Pipe({
  name: 'cpf'
})
export class CpfPipe implements PipeTransform {

  transform(value: string, ): string {
    if(!value){
      return '';
    }
    return cpf.format(value);
  }

}
