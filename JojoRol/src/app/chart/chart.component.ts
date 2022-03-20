import { IfStmt } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Chart, ChartDataset, ChartOptions } from 'chart.js';
import { baseColors } from 'ng2-charts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
})
export class ChartComponent implements OnInit {
  chart: any;
  rgb: boolean = false;
  HSL: number = 0;

  @Output() outRgb = new EventEmitter();

  constructor() {}

  actualizar() {
    if (this.rgb) {
      this.rgb = false;
      this.HSL = 360;
      this.chart.data.datasets[0].backgroundColor =
        'HSL(' + this.HSL + ',100%,50%,0.2)';
      this.chart.data.datasets[0].borderColor =
        'HSL(' + this.HSL + ',100%,50%,0.2)';
      this.chart.data.datasets[0].pointBackgroundColor =
        'HSL(' + this.HSL + ',100%,50%,0.2)';
      this.chart.update();
      this.outRgb.emit(false);
    } else {
      this.rgb = true;
      this.outRgb.emit(true);
    }
  }

  ngOnInit(): void {
    this.doRGB();
    this.chart = new Chart('realtime', {
      type: 'radar',
      data: {
        labels: [
          ['Poder destructivo', ['A']],
          ['Velocidad', ['A']],
          ['Rango', ['A']],
          ['Durabilidad', ['A']],
          ['Precision', ['A']],
          ['Potencial de desarrollo', ['A']],
        ],
        datasets: [
          {
            label: 'Competencia',
            data: ['0', '1', '2', '3', '4', '5'],
            fill: true,
            backgroundColor: 'HSL(360,100%,50%,0.2)',
            borderColor: 'HSL(360,100%,50%,1)',
            pointBackgroundColor: 'HSL(360,100%,50%,1)',
            pointHoverBorderColor: 'HSL(360,100%,50%,1)',
          },
        ],
      },
      options: {
        scales: {
          r: {
            ticks: {
              display: false,
              maxTicksLimit: 10,
            },
            angleLines: {
              display: false,
            },
            suggestedMin: 0,
            suggestedMax: 6,
          },
        },
        plugins: {
          legend: {
            display: false,
            labels: {
              font: {
                size: 30,
              },
              textAlign: 'center',
            },
          },
        },
      },
    });
  }

  doRGB() {
    let timerId = setInterval(() => this.cambioColor(), 10);
  }

  cambioColor() {
    if (this.rgb) {
      if (this.HSL == 360) {
        this.HSL = 0;
      } else {
        this.HSL++;
      }
      this.chart.data.datasets[0].backgroundColor =
        'HSL(' + this.HSL + ',100%,50%,0.2)';
      this.chart.data.datasets[0].borderColor =
        'HSL(' + this.HSL + ',100%,50%,0.2)';
      this.chart.data.datasets[0].pointBackgroundColor =
        'HSL(' + this.HSL + ',100%,50%,0.2)';

      this.chart.update();
    }
  }
}
