import {CPSI} from './cpsi';
import {RawData} from './raw-data';

export class CPSIWCDMA extends CPSI {
  mccMnc: string;
  lac: string; // Location Area Code (hexadecimal digits)
  cellID: string;
  frequencyBand: string;
  psc: string; // Primary synchronization code of active set.
  freq: string; // Downlink frequency of active set
  ssc: string; // Secondary synchronization code of active set
  ecio: string;
  rscp: string; // Received Signal Code Power
  qual: string; // Quality value for base station selection
  rxLev: string; // RX level value for base station selection
  txpwr: string; // UE TX power in dBm. If no TX, the value is 500

  constructor(raw: RawData[]) {
    super();
    for (const rawItem of raw) {
      if (rawItem.data.includes('+CPSI:')) {
        const split = rawItem.data.replace('+CPSI: ', '').trim().split(',');
        if (split.length > 1) {
          this.systemMode = split[0].trim();
          this.operationMode = split[1].trim();
          this.mccMnc = split[2].trim();
          this.lac = split[3].trim();
          this.cellID = split[4].trim();
          this.frequencyBand = split[5].trim();
          this.psc = split[6].trim();
          this.freq = split[7].trim();
          this.ssc = split[8].trim();
          this.ecio = split[9].trim();
          this.rscp = split[10].trim();
          this.qual = split[11].trim();
          this.rxLev = split[12].trim();
          this.txpwr = split[13].trim();
          this.date = new Date();
        }
      }
    }
  }
}
