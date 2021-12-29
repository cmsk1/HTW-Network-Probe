import {RawData} from './raw-data';

export class CICCID {
  id: string;

  constructor(raw: RawData[]) {
    for (const rawItem of raw) {
      if (rawItem.data.includes('+ICCID:')) {
        this.id = rawItem.data.replace('+ICCID: ', '').trim();
      }
    }
  }
}
