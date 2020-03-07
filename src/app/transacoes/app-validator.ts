import { AbstractControl } from '@angular/forms';
import { CpfValidatorPipe } from '../pipes/cpf-validator.pipe';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

export class AppValidator{
  static cpfValidator(control: AbstractControl){
    return new CpfValidatorPipe().transform(control.value) ? null : {cpf: 'CPF Inválido'};
  }
}
