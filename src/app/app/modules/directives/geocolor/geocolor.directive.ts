import { Directive, ElementRef, AfterContentInit } from '@angular/core';

@Directive({
  selector: '[appGeocolor]'
})
export class GeocolorDirective {

  element: ElementRef;

  constructor(private e: ElementRef) {
    this.element = e;
  }

  ngAfterContentInit() {
    this.element.nativeElement.style.color = this.element.nativeElement.innerText.includes('-') ? 'red' : 'green';
  }
}