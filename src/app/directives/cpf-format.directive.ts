import { Directive, ElementRef, HostListener, AfterViewInit, Renderer2 } from '@angular/core';
import * as cpf from "@fnando/cpf";
import { CpfPipe } from '../pipes/cpf.pipe';

@Directive({
  selector: 'input[appCpfFormat]'
})
export class CpfFormatDirective  implements AfterViewInit {
  private key: string;

  constructor(private element: ElementRef, private renderer:Renderer2) {}

  @HostListener('input', ['$event.target'])
  onchange({value}){

      this.element.nativeElement.value = new CpfPipe().transform(value);
  }

  @HostListener('keydown', ['$event'])
  onkeyPress({key}){
    this.key = key;
  }

  ngAfterViewInit(){
    this.renderer.setAttribute(this.element.nativeElement, 'maxlength', '14');
  }

}
