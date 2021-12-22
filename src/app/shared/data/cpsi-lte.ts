import {CPSI} from './cpsi';
import {RawData} from './raw-data';

export class CPSILTE extends CPSI {
  mccMnc: string;
  tac: string; // Tracing Area Code (hexadecimal digits)
  sCellID: string; // // Service Cell ID
  pCellID: string; // Physical Cell ID
  frequencyBand: string;
  earfcn: string; // E-UTRA absolute radio frequency channel number for searching LTE cell
  dlbw: string; // Transmission bandwidth configuration of the serving cell on the
  ulbw: string; // Transmission bandwidth configuration of the serving cell on the uplink
  rsrq: string; //Current reference signal receive quality as measured by L1.
  rsrp: string; // Current reference signal received power in -1/10 dBm. Available for LTE
  rssi: string; // RSSI
  rssnr: string; // Average reference signal signal-to-noise ratio of the serving cell

  constructor(raw: RawData[]) {
    super();
    for (const rawItem of raw) {
      if (rawItem.data.includes('+CPSI:')) {
        const split = rawItem.data.replace('+CPSI: ', '').trim().split(',');
        if (split.length > 1) {
          this.systemMode = split[0].trim();
          this.operationMode = split[1].trim();
          this.mccMnc = split[2].trim();
          this.tac = split[3].trim();
          this.sCellID = split[4].trim();
          this.pCellID = split[5].trim();
          this.frequencyBand = split[6].trim();
          this.earfcn = split[7].trim();
          this.dlbw = split[8].trim();
          this.ulbw = split[9].trim();
          this.rsrq = split[10].trim();
          this.rsrp = split[11].trim();
          this.rssi = split[12].trim();
          this.rssnr = split[13].trim();
          this.date = new Date();
        }
      }
    }
  }
}
