import { Pipe, PipeTransform } from '@angular/core';
import * as cpf from "@fnando/cpf";

@Pipe({
  name: 'cpfValidator'
})
export class CpfValidatorPipe implements PipeTransform {

  transform(value: string): boolean {
    if(value){
      return cpf.isValid(value);
    }
  }

}
