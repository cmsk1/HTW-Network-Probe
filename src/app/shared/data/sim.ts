import {RawData} from './raw-data';

export class Sim {
  status: string;
  error: boolean;

  constructor(raw: RawData[]) {
    for (const rawItem of raw) {
      if (rawItem.data.includes('+CME ERROR:')) {
        this.status = rawItem.data.replace('+CME ERROR: ', '').trim();
        this.error = true;
      } else if (rawItem.data.includes('+CPIN:')) {
        this.status = rawItem.data.replace('+CPIN: ', '').trim();
        this.error = false;
      }
    }
  }
}
