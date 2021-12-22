import {RawData} from './raw-data';

export class Temp {
  info: string;
  constructor(raw: RawData[]) {
    for (const rawItem of raw) {
      if (rawItem.data.includes('+CPMUTEMP:')) {
        this.info = rawItem.data.replace('+CPMUTEMP: ', '').trim();
      }
    }
  }
}
