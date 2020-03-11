import { AbstractControl } from '@angular/forms';
import { CpfValidatorPipe } from '../pipes/cpf-validator.pipe';

export class AppValidator{
  static cpfValidator(control: AbstractControl){
    return new CpfValidatorPipe().transform(control.value) ? null : {cpf: 'CPF Inválido'};
  }
}
