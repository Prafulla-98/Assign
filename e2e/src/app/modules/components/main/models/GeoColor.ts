import { Directive, ElementRef } from '@angular/core';

@Directive({
    selector: "[geoColor]"
})
export class GeoColor {
    constructor(private e: ElementRef) {
        const numberValue = e.nativeElement.innerHTML;

        if (numberValue.includes('-')) {
            e.nativeElement.style.color = 'red';
        } else {
            e.nativeElement.style.color = 'green';
        }
    }
}