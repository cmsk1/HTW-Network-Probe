import {RawData} from './raw-data';

export class SPIC {
  remainingPIN: number;
  remainingPUK: number;
  remainingPIN2: number;
  remainingPUK2: number;

  constructor(raw: RawData[]) {
    for (const rawItem of raw) {
      if (rawItem.data.includes('+SPIC:')) {
        const tmp = rawItem.data.replace('+SPIC: ', '').trim();
        const split = tmp.split(',');
        this.remainingPIN = Number(split[0]);
        this.remainingPUK = Number(split[1]);
        this.remainingPIN2 = Number(split[2]);
        this.remainingPUK2 = Number(split[3]);
      }
    }
  }
}
