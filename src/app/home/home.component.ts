import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {
  faAddressBook,
  faEthernet,
  faMicrochip,
  faSatelliteDish,
  faSms,
  faTerminal,
  faWifi,
  faPlay,
  faSimCard
} from '@fortawesome/free-solid-svg-icons';
import {SerPort} from '../shared/data/ser-port';
import * as SerialPort from 'serialport';
import {ATStatus} from './enums/atstatus';
import {RawData} from '../shared/data/raw-data';
import * as lodash from 'lodash';
import {ElectronService} from '../core/services';
import {ATI} from '../shared/data/ati';
import {CSQ} from '../shared/data/csq';
import {Sim} from '../shared/data/sim';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  faEthernet = faEthernet;
  faSatelliteDish = faSatelliteDish;
  faWifi = faWifi;
  faMicrochip = faMicrochip;
  faSms = faSms;
  faTerminal = faTerminal;
  faAddressBook = faAddressBook;
  faPlay = faPlay;
  faSimCard = faSimCard;

  tab: string;
  netTab: string;
  selectedSignalInterval = 5000;

  ports: SerPort[];
  lodash = lodash;
  rawData: RawData[];
  analyseData: RawData[];
  analyseDataActive: boolean;
  checkCSQActive: boolean;
  inputStringRaw: string;
  selectedPortId: string;
  lastCommand: string;
  connected: string;
  selectedPort: SerPort;
  serialPort: SerialPort;
  parser: SerialPort.parsers.Delimiter;
  atStatus: ATStatus;

  ati: ATI;
  sim: Sim;
  csq: CSQ[];

  constructor(private electron: ElectronService, private changeDetection: ChangeDetectorRef) {
    this.tab = 'connect';
    this.netTab = 'signal';
    this.rawData = [];
    this.analyseDataActive = false;
    this.checkCSQActive = false;
    this.connected = 'NOT_CONNECTED';
    this.csq = [];
    this.getAllPorts();

    setInterval(() => this.checkCSQ(), this.selectedSignalInterval);
  }

  ngOnInit(): void {
  }

  connectToPort() {
    this.connected = 'CONNECTING';
    this.serialPort = new this.electron.serialPort(this.selectedPort.path, {baudRate: Number(115200)});
    this.parser = this.serialPort.pipe(new this.electron.serialPort.parsers.Readline({delimiter: '\r\n'}));

    this.serialPort.on('open', () => {
      this.connected = 'CONNECTED';
      this.initAT();
    });
    this.serialPort.on('error', (err) => {
      this.rawData.push(new RawData(err.toString().trim(), false));
      this.connected = 'NOT_CONNECTED';
    });

    this.parser.on('data', data => {
      if (data && data.toString().trim() !== '') {
        this.rawData.push(new RawData(data.toString().trim(), false));
        this.changeDetection.detectChanges();
        this.handleReceivedData(data.toString().trim());
      }
    });
  }

  selectPort(selectedPortID: string) {
    this.selectedPort = this.ports.find(p => p.path === selectedPortID);
  }

  initAT() {
    this.serialWriteMessage('AT');
    this.changeDetection.detectChanges();
  }

  checkAT() {
    this.serialWriteMessage('AT');
    this.changeDetection.detectChanges();
  }

  closePort() {
    this.serialPort.close();
    this.atStatus = null;
    this.connected = 'NOT_CONNECTED';
    this.lastCommand = '';
    this.rawData = [];
    this.inputStringRaw = '';
    this.analyseDataActive = false;
    this.checkCSQActive = false;
    this.ati = null;
    this.csq = [];
  }

  getAllPorts() {
    if (this.connected === 'CONNECTED') {
      this.closePort();
    }
    this.ports = null;
    this.selectedPort = null;
    this.selectedPortId = '';
    this.electron.serialPort.list().then((ports: SerPort[]) => {
      this.ports = ports;
    }).catch((err: any) => {
      console.log(err);
      this.connected = 'NOT_CONNECTED';
    });
  }

  sendRawMessage() {
    if (this.inputStringRaw && this.inputStringRaw.trim().length > 0) {
      this.serialWriteMessage(this.inputStringRaw);
      this.inputStringRaw = '';
    }
  }


  serialWriteMessage(text: string) {
    this.lastCommand = text.toString().trim();
    text = text.trim() + '\r\n';
    const self = this;
    this.rawData.push(new RawData(text, true));
    setTimeout(() => {
        this.changeDetection.detectChanges();
        this.serialPort.write(text, function (err) {
          if (err) {
            self.atStatus = ATStatus.OK;
            self.rawData.push(new RawData(err.message, true));
            self.changeDetection.detectChanges();
          }
        });
      },
      500);
  }

  handleReceivedData(data: string) {
    if (data && data.length > 0) {
      if (data.toString().trim().toUpperCase() === this.lastCommand.trim().toUpperCase() && !this.analyseDataActive) {
        this.analyseDataActive = true;
        this.atStatus = ATStatus.WAITING;
        this.analyseData = [];
      }
      if (this.analyseDataActive) {
        if (data.toString().trim().toUpperCase() === 'OK' || data.toString().trim().toUpperCase() === 'ERROR') {
          this.analyseDataActive = false;
          this.atStatus = ATStatus.OK;
          this.analyseDataFromArray();
        } else if (data.toString().trim().toUpperCase() !== this.lastCommand.toString().trim().toUpperCase()) {
          this.analyseData.push(new RawData(data.toString().trim(), true));
        }

        if (data.includes('+CME ERROR:')) {
          this.analyseDataActive = false;
          this.atStatus = ATStatus.OK;
          this.analyseDataFromArray();
        }
      }
    }
    this.changeDetection.detectChanges();
  }

  analyseDataFromArray() {
    if (this.lastCommand === 'AT' && !this.ati) {
      this.serialWriteMessage('ATI');
    }
    if (this.lastCommand === 'AT+CPIN?') {
      this.sim = new Sim(this.analyseData);
    }
    if (this.lastCommand === 'ATI') {
      this.ati = new ATI(this.analyseData);
      if (!this.sim) {
        this.tab = 'sim';
      }
    }
    if (this.lastCommand === 'AT+CSQ') {
      this.csq.push(new CSQ(this.analyseData));
    }
  }

  checkCSQ() {
    if (this.ati && this.atStatus === ATStatus.OK && !this.analyseDataActive && this.checkCSQActive) {
      this.serialWriteMessage('AT+CSQ');
    }
  }

}
