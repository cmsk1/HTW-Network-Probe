import {RawData} from './raw-data';

export class COPSC {
  mode: number;
  stat: number;
  id: string;
  technology: number;
  operator: string;
  name: string;

  constructor(raw: RawData[]) {
    for (const rawItem of raw) {
      if (rawItem.data.includes('+COPS:')) {
        const tmp = rawItem.data.replace('+COPS: ', '').replace('"', '').trim();
        const split = tmp.split(',');
        this.mode = Number(split[0]);
        this.stat = Number(split[1]);
        this.id = split[2].trim();
        this.technology = Number(split[3]);
        this.operator = '';
        this.name = '';
      }
    }
  }
}
