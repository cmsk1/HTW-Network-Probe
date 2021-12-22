import {RawData} from './raw-data';

export class CFUN {
  level: number;
  constructor(raw: RawData[]) {
    for (const rawItem of raw) {
      if (rawItem.data.includes('+CFUN:')) {
        this.level = Number(rawItem.data.replace('+CFUN: ', '').trim());
      }
    }
  }
}
