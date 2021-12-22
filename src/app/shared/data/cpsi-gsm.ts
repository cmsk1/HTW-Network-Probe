import {CPSI} from './cpsi';
import {RawData} from './raw-data';

export class CPSIGSM extends CPSI {
  mccMnc: string;
  lac: string; // Location Area Code (hexadecimal digits)
  cellID: string;
  absoluteRFChNr: string;
  rxLev: string; // RX level value for base station selection
  trackLoAdjust: string;
  c1c2: string;

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
          this.rxLev = split[5].trim();
          this.trackLoAdjust = split[6].trim();
          this.c1c2 = split[7].trim();
          this.date = new Date();
        }
      }
    }
  }
}
