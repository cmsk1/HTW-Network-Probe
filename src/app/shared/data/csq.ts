import {RawData} from './raw-data';

export class CSQ {
  rssi: number;
  dbm: number;
  rxqual: number;
  quality: string;

  constructor(raw: RawData[]) {
    for (const rawItem of raw) {
      this.rssi = parseFloat(rawItem.data.replace('+CSQ: ', '').split(',')[0].trim());
      this.rxqual = parseFloat(rawItem.data.replace('+CSQ: ', '').split(',')[1].trim());
      this.rssiToDbm();
    }
  }

  private rssiToDbm() {
    this.dbm = Number((-113 + 2 * this.rssi).toFixed(2));
    if (this.dbm < -109) {
      this.quality = 'Very Bad';
    }
    if (this.dbm >= -109 && this.dbm < -95) {
      this.quality = 'Bad';
    }
    if (this.dbm >= -95 && this.dbm < -85) {
      this.quality = 'Ok';
    }
    if (this.dbm >= -85 && this.dbm < -75) {
      this.quality = 'Good';
    }
    if (this.dbm >= -75) {
      this.quality = 'Excellent';
    }
  }
}
