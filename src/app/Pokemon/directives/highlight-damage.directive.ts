import { Directive, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appHighlightDamage]',
})
export class HighlightDamageDirective {
  @Input() set appHighlightDamage(damage: number) {
    if (damage > 50) {
      this.renderer2.setStyle(
        this.elementRef.nativeElement,
        'border',
        '2px solid red'
      );
    }
  }
  constructor(private renderer2: Renderer2, private elementRef: ElementRef) {}
}
