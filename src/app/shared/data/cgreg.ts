import {RawData} from './raw-data';

export class CGREG {
  n: number;
  status: number;

  constructor(raw: RawData[]) {
    for (const rawItem of raw) {
      if (rawItem.data.includes('+CGREG:')) {
        const split = rawItem.data.replace('+CGREG: ', '').trim().split(',');
        if (split.length > 1) {
          this.n = Number(split[0]);
          this.status = Number(split[1]);
        }
      }
    }
  }
}
