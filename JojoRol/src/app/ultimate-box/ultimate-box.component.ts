import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ultimate-box',
  templateUrl: './ultimate-box.component.html',
  styleUrls: ['./ultimate-box.component.css'],
})
export class UltimateBoxComponent implements OnInit {
  @Input('rgb') rgb = false;
  timerId: any;
  HSL: number = 0;
  table: any;
  constructor() {}

  ngOnInit(): void {
    this.table = document.getElementById('tablaId');
  }
  ngOnChanges() {
    console.log(this.rgb);
    this.timerId = setInterval(() => this.doUltimateRGB(this.timerId), 10);
  }

  doUltimateRGB(timerId: any) {
    if (this.rgb) {
      this.cambiarColor();
    } else {
      this.table.style.borderColor = 'black';
      clearInterval(timerId);
    }
  }

  cambiarColor() {
    if (this.HSL < 360) {
      this.table.style.borderColor = 'HSL(' + this.HSL + ',100%,50%,1)';

      this.HSL++;
    } else {
      this.HSL = 0;
      this.table.style.borderColor = 'HSL(' + this.HSL + ',100%,50%,1)';
    }
  }
}
