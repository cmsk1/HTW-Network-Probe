import {CPSI} from './cpsi';
import {RawData} from './raw-data';

export class CPSINOSERVICE extends CPSI {
  constructor(raw: RawData[]) {
    super();
    for (const rawItem of raw) {
      if (rawItem.data.includes('+CPSI:')) {
        const split = rawItem.data.replace('+CPSI: ', '').trim().split(',');
        if (split.length > 1) {
          this.systemMode = split[0].trim();
          this.operationMode = split[1].trim();
          this.date = new Date();
        }
      }
    }
  }
}
