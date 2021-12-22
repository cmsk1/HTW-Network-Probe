import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {UIChart} from 'primeng/chart';
import {Table} from 'primeng/table';
import {CPSILTE} from '../../../../../shared/data/cpsi-lte';
import {CPSIGSM} from '../../../../../shared/data/cpsi-gsm';
import {CPSIWCDMA} from '../../../../../shared/data/cpsi-wcdma';
import {CPSINOSERVICE} from '../../../../../shared/data/cpsi-noservice';

@Component({
  selector: 'app-network',
  templateUrl: './network.component.html',
  styleUrls: ['./network.component.scss']
})
export class NetworkComponent implements OnInit {

  @ViewChild('chartNo') chartNo: UIChart;
  @ViewChild('chartLTE') chartLTE: UIChart;
  @ViewChild('chartGSM') chartGSM: UIChart;
  @ViewChild('chartWCDMA') chartWCDMA: UIChart;
  @ViewChild('dtLTE') dtLTE: Table;
  @ViewChild('dtGSM') dtGSM: Table;
  @ViewChild('dtWCDMA') dtWCDMA: Table;
  @ViewChild('dtNo') dtNo: Table;
  @Input() values: any[];
  @Input() active: boolean;

  valuesLTE: CPSILTE[];
  valuesGSM: CPSIGSM[];
  valuesWCDMA: CPSIWCDMA[];
  valuesNoService: CPSINOSERVICE[];

  dataLTE: any;
  dataGSM: any;
  dataWCDMA: any;
  dataNoService: any;

  dtValues: any;
  basicOptions: any;
  noServiceOptions: any;

  tab: any;

  colsLTE = [
    {field: 'date', header: 'Datum'},
    {field: 'systemMode', header: 'Mode'},
    {field: 'operationMode', header: 'Status'},
    {field: 'mccMnc', header: 'MCC-MNC'},
    {field: 'tac', header: 'TAC'},
    {field: 'sCellID', header: 'Ser. Cell ID'},
    {field: 'pCellID', header: 'Phy. Cell ID'},
    {field: 'frequencyBand', header: 'Frequency Band'},
    {field: 'earfcn', header: 'E-UTRA Nr.'},
    {field: 'dlbw', header: 'DLBW'},
    {field: 'ulbw', header: 'ULBW'},
    {field: 'rsrq', header: 'RSRQ'},
    {field: 'rsrp', header: 'RSRP'},
    {field: 'rssi', header: 'RSSI'},
    {field: 'rssnr', header: 'RSSNR'}
  ];

  colsGSM = [
    {field: 'date', header: 'Datum'},
    {field: 'systemMode', header: 'Mode'},
    {field: 'operationMode', header: 'Status'},
    {field: 'mccMnc', header: 'MCC-MNC'},
    {field: 'lac', header: 'LAC'},
    {field: 'cellID', header: 'Cell ID'},
    {field: 'absoluteRFChNr', header: 'AFRCN'},
    {field: 'rxLev', header: 'Cell ID'},
    {field: 'trackLoAdjust', header: 'Track LO Adjust'},
    {field: 'c1c2', header: 'C1-C2'}
  ];

  colsWCDMA = [
    {field: 'date', header: 'Datum'},
    {field: 'systemMode', header: 'Mode'},
    {field: 'operationMode', header: 'Status'},
    {field: 'mccMnc', header: 'MCC-MNC'},
    {field: 'lac', header: 'LAC'},
    {field: 'cellID', header: 'Cell ID'},
    {field: 'frequencyBand', header: 'AFRCN'},
    {field: 'psc', header: 'PSC'},
    {field: 'freq', header: 'DL Frequency'},
    {field: 'ssc', header: 'SSC'},
    {field: 'ecio', header: 'Ec/Io'},
    {field: 'rscp', header: 'RSC Power'},
    {field: 'qual', header: 'Quality'},
    {field: 'rxLev', header: 'RX level'},
    {field: 'txpwr', header: 'UE TX power'}
  ];

  colsNo = [
    {field: 'date', header: 'Datum'},
    {field: 'systemMode', header: 'Mode'},
    {field: 'operationMode', header: 'Status'},
  ];

  constructor() {
    this.valuesLTE = [];
    this.valuesGSM = [];
    this.valuesWCDMA = [];
    this.valuesNoService = [];

    this.tab = 'chart';

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

    this.noServiceOptions = {
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
          min: '0',
          max: '1.1',
          ticks: {
            color: '#495057'
          },
          grid: {
            color: '#ebedef'
          }
        }
      }
    };
  }

  ngOnInit(): void {
    setInterval(() => {
      this.reInitChart();
      this.valuesGSM = [...this.values].filter(gsm => gsm.systemMode.includes('GSM'));
      this.valuesLTE = [...this.values].filter(gsm => gsm.systemMode.includes('LTE'));
      this.valuesWCDMA = [...this.values].filter(gsm => gsm.systemMode.includes('WCDMA'));
      this.valuesNoService = [...this.values].filter(gsm => gsm.systemMode.includes('NO SERVICE'));
    }, 1000);

  }

  reInitChart() {
    if (this.active) {
      this.dataLTE = {
        labels: this.values.map((a, index) => index).slice(-50),
        datasets: [
          {
            label: 'RSRQ (receive quality)',
            data: this.values.map(a => this.normalizeToZero(a.rsrq, a.systemMode, a.systemMode.includes('LTE'))).slice(-50),
            fill: false,
            borderColor: '#003bff',
            tension: .4,
          },
          {
            label: 'RSRP (received power in -1/10 dBm)',
            data: this.values.map(a => this.normalizeToZero(a.rsrp, a.systemMode, a.systemMode.includes('LTE'))).slice(-50),
            fill: false,
            borderColor: '#5972c7',
            tension: .4,
          },
          {
            label: 'RSSI (Received Signal Strength Indicator)',
            data: this.values.map(a => this.normalizeToZero(a.rssi, a.systemMode, a.systemMode.includes('LTE'))).slice(-50),
            fill: false,
            borderColor: '#21c7c1',
            tension: .4,
          }
        ]
      };
      this.dataGSM = {
        labels: this.values.map((a, index) => index).slice(-50),
        datasets: [
          {
            label: 'RxLev (RX level value for base station selection)',
            data: this.values.map(a => this.normalizeToZero(a.rxLev, a.systemMode, a.systemMode.includes('GSM'))).slice(-50),
            fill: false,
            borderColor: '#e19800',
            tension: .4,
          }
        ]
      };
      this.dataWCDMA = {
        labels: this.values.map((a, index) => index).slice(-50),
        datasets: [
          {
            label: 'RxLev (RX level)',
            data: this.values.map(a => this.normalizeToZero(a.rxLev, a.systemMode, a.systemMode.includes('WCDMA'))).slice(-50),
            fill: false,
            borderColor: '#72fca2',
            tension: .4,
          },
          {
            label: 'Qual (Quality value)',
            data: this.values.map(a => this.normalizeToZero(a.qual, a.systemMode, a.systemMode.includes('WCDMA'))).slice(-50),
            fill: false,
            borderColor: '#0b9a01',
            tension: .4,
          },
          {
            label: 'RSCP (Received Signal Code Power)',
            data: this.values.map(a => this.normalizeToZero(a.rscp, a.systemMode, a.systemMode.includes('WCDMA'))).slice(-50),
            fill: false,
            borderColor: '#0bff00',
            tension: .4,
          }
        ]
      };
      this.dataNoService = {
        labels: this.values.map((a, index) => index).slice(-50),
        datasets: [
          {
            label: 'Ja/Nein',
            data: this.values.map(a => this.normalizeToZero(0, a.systemMode, a.systemMode.includes('NO SERVICE'))).slice(-50),
            fill: false,
            borderColor: '#ff0000',
            tension: .4,
          }
        ]
      };
      if (this.tab === 'chart') {
        this.chartLTE.refresh();
        this.chartGSM.refresh();
        this.chartWCDMA.refresh();
        this.chartNo.refresh();
      }
    }
  }

  private normalizeToZero(input: any, mode: string, isRelevant: boolean) {
    if (input == null && !mode.includes('NO SERVICE')) {
      return 0;
    } else if (mode.includes('NO SERVICE')) {
      return 1;
    } else {
      return Number(input);
    }
  }
}
