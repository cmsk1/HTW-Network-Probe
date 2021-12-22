import {RawData} from './raw-data';

export class ATI {
  manufacturer: string;
  model: string;
  revision: string;
  imei: string;
  flags: string;

  constructor(raw: RawData[]) {
    for (const rawItem of raw) {
      if (rawItem.data.includes('Manufacturer:')) {
        this.manufacturer = rawItem.data.replace('Manufacturer: ', '').trim();
      } else if (rawItem.data.includes('Model:')) {
        this.model = rawItem.data.replace('Model: ', '').trim();
      } else if (rawItem.data.includes('Revision:')) {
        this.revision = rawItem.data.replace('Revision: ', '').trim();
      } else if (rawItem.data.includes('IMEI:')) {
        this.imei = rawItem.data.replace('IMEI: ', '').trim();
      } else {
        this.flags = rawItem.data.trim();
      }
    }
  }
}
