import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appLiving]'
})
export class LivingDirective {

  constructor(private eleRef: ElementRef) {
    eleRef.nativeElement.style.background = 'red';
    eleRef.nativeElement.style.paddingTop = 10;
    eleRef.nativeElement.style.paddingBottom = 10;
    eleRef.nativeElement.style.textAlign = 'center';
    eleRef.nativeElement.style.color = 'white';
  }
}
