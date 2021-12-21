import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {CSQ} from '../../../../../shared/data/csq';
import {UIChart} from 'primeng/chart';
import {Table} from 'primeng/table';

@Component({
  selector: 'app-signal-quality-chart',
  templateUrl: './signal-quality-chart.component.html',
  styleUrls: ['./signal-quality-chart.component.scss']
})
export class SignalQualityChartComponent implements OnInit {

  @ViewChild('chart') chart: UIChart;
  @ViewChild('dt') dt: Table;
  @Input() values: CSQ[];

  basicData: any;
  dtValues: any;
  basicOptions: any;

  cols = [
    {field: 'date', header: 'Datum'},
    {field: 'rssi', header: 'Messwert'},
    {field: 'dbm', header: 'dBm'},
    {field: 'quality', header: 'Qualität'},
    {field: 'rxqual', header: 'RXQUAL'}
  ];
  constructor() {

  }

  ngOnInit(): void {

    setInterval(() => {
      this.reInitChart();
      this.dtValues = [...this.values];
    }, 1000);

  }

  reInitChart() {
    this.basicData = {
      labels: this.values.map((a, index) => index).slice(-70),
      datasets: [
        {
          label: 'Qualität in dBm (niedriger ist besser)',
          data: this.values.map(a => a.dbm).slice(-70),
          fill: false,
          borderColor: '#e30000',
          tension: .4,
        }
      ]
    };

    this.basicOptions = {
      animation: {
        duration: 0
      },
      plugins: {
        legend: {
          labels: {
            color: '#495057'
          }
        }
      },
      responsive: true,
      scales: {
        x: {
          ticks: {
            color: '#495057'
          },
          grid: {
            color: '#ebedef'
          }
        },
        y: {
          grace: '50%',
          ticks: {
            color: '#495057'
          },
          grid: {
            color: '#ebedef'
          }
        }
      }
    };
    this.chart.refresh();
  }

}
