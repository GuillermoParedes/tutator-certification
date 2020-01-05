import { Directive, ElementRef, Input, OnInit, HostBinding, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBackground]'
})

export class BackgroundDirective implements OnInit {

  @HostBinding('class')

  @Input() data: string;
  @Input() params: object;


  constructor(private renderer: Renderer2, private eleRef: ElementRef) {
    this.eleRef.nativeElement.style.position = 'relative';
    this.eleRef.nativeElement.style.padding = '0.75rem 1.25rem';
    this.eleRef.nativeElement.style.marginBottom = '1rem';
    this.eleRef.nativeElement.style.border = '1px solid transparent';
    this.eleRef.nativeElement.style.borderRadius = '0.25rem';
  }

  ngOnInit() {
    this.renderer.addClass(this.eleRef.nativeElement, this.params[this.data]);
  }
}
