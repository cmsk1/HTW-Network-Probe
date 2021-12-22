import {RawData} from './raw-data';

export class Cbc {
  info: string;
  constructor(raw: RawData[]) {
    for (const rawItem of raw) {
      if (rawItem.data.includes('+CBC:')) {
        this.info = rawItem.data.replace('+CBC: ', '').trim();
      }
    }
  }
}
