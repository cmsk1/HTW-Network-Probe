import {RawData} from './raw-data';

export class CIMI {
  imsi: string; // International Mobile Subscriber Identity
  mcc: string; // Mobiler Ländercode
  mnc: string; // Mobilfunknetzkennzahl
  msin: string; // Mobile Teilnehmeridentifikationszahl / nummer
  operatorATDE: string;

  constructor(raw: RawData[]) {
    for (const rawItem of raw) {
      this.imsi = rawItem.data.trim();
      this.mcc = this.imsi.substring(0, 3);
      this.mnc = this.imsi.substring(4, 6);
      this.msin = this.imsi.substring(5);

      if (this.imsi.startsWith('26201')) {
        this.operatorATDE = 'Telekom Deutschland GmbH';
      }
      if (this.imsi.startsWith('26202')) {
        this.operatorATDE = 'Vodafone GmbH';
      }
      if (this.imsi.startsWith('26203')) {
        this.operatorATDE = 'Telefónica Germany GmbH & Co. oHG';
      }
      if (this.imsi.startsWith('26204')) {
        this.operatorATDE = 'Vodafone GmbH';
      }
      if (this.imsi.startsWith('26205')) {
        this.operatorATDE = 'Telefónica Germany GmbH & Co. oHG';
      }
      if (this.imsi.startsWith('26206')) {
        this.operatorATDE = 'Telekom Deutschland GmbH';
      }
      if (this.imsi.startsWith('26207')) {
        this.operatorATDE = 'Telefónica Germany GmbH & Co. oHG';
      }
      if (this.imsi.startsWith('26208')) {
        this.operatorATDE = 'Telefónica Germany GmbH & Co. oHG';
      }
      if (this.imsi.startsWith('26209')) {
        this.operatorATDE = 'Vodafone GmbH';
      }
      if (this.imsi.startsWith('26210')) {
        this.operatorATDE = 'DB Netz AG';
      }
      if (this.imsi.startsWith('26211')) {
        this.operatorATDE = 'Telefónica Germany GmbH & Co. oHG';
      }
      if (this.imsi.startsWith('26212')) {
        this.operatorATDE = 'Telefónica Germany GmbH & Co. oHG';
      }
      if (this.imsi.startsWith('26215')) {
        this.operatorATDE = 'Airdata AG';
      }
      if (this.imsi.startsWith('26216')) {
        this.operatorATDE = 'Telefónica Germany GmbH & Co. oHG';
      }
      if (this.imsi.startsWith('26217')) {
        this.operatorATDE = 'Telefónica Germany GmbH & Co. oHG';
      }
      if (this.imsi.startsWith('26218')) {
        this.operatorATDE = 'NetCologne Ges. f. Telekommunikation mbH';
      }
      if (this.imsi.startsWith('26219')) {
        this.operatorATDE = 'inquam Deutschland GmbH';
      }
      if (this.imsi.startsWith('26220')) {
        this.operatorATDE = 'Telefónica Germany GmbH & Co. oHG';
      }
      if (this.imsi.startsWith('26221')) {
        this.operatorATDE = 'Multiconnect GmbH';
      }
      if (this.imsi.startsWith('26222')) {
        this.operatorATDE = 'sipgate Wireless GmbH';
      }
      if (this.imsi.startsWith('26223')) {
        this.operatorATDE = 'Drillisch Netz AG';
      }
      if (this.imsi.startsWith('26224')) {
        this.operatorATDE = 'TelcoVillage GmbH';
      }
      if (this.imsi.startsWith('26242')) {
        this.operatorATDE = 'Vodafone GmbH';
      }
      if (this.imsi.startsWith('26243')) {
        this.operatorATDE = 'Vodafone GmbH';
      }
      if (this.imsi.startsWith('26270')) {
        this.operatorATDE = 'BDBOS';
      }
      if (this.imsi.startsWith('26272')) {
        this.operatorATDE = 'Ericsson GmbH';
      }
      if (this.imsi.startsWith('26273')) {
        this.operatorATDE = 'Nokia Solutions and Networks GmbH & Co. KG';
      }
      if (this.imsi.startsWith('26274')) {
        this.operatorATDE = 'Ericsson GmbH';
      }
      if (this.imsi.startsWith('26276')) {
        this.operatorATDE = 'BDBOS';
      }
      if (this.imsi.startsWith('26277')) {
        this.operatorATDE = 'Telefónica Germany GmbH & Co. oHG';
      }
      if (this.imsi.startsWith('26278')) {
        this.operatorATDE = 'Telekom Deutschland GmbH';
      }
      if (this.imsi.startsWith('23201')) {
        this.operatorATDE = 'A1 Telekom Austria AG';
      }
      if (this.imsi.startsWith('23202')) {
        this.operatorATDE = 'A1 Telekom Austria AG';
      }
      if (this.imsi.startsWith('23203')) {
        this.operatorATDE = 'T-Mobile Austria GmbH';
      }
      if (this.imsi.startsWith('23205')) {
        this.operatorATDE = 'Hutchison Drei Austria GmbH';
      }
      if (this.imsi.startsWith('23207')) {
        this.operatorATDE = 'T-Mobile Austria GmbH';
      }
      if (this.imsi.startsWith('23208')) {
        this.operatorATDE = 'Lycamobile Austria Ltd';
      }
      if (this.imsi.startsWith('23209')) {
        this.operatorATDE = 'A1 Telekom Austria AG';
      }
      if (this.imsi.startsWith('23210')) {
        this.operatorATDE = 'Hutchison Drei Austria GmbH';
      }
      if (this.imsi.startsWith('23211')) {
        this.operatorATDE = 'A1 Telekom Austria AG';
      }
      if (this.imsi.startsWith('23212')) {
        this.operatorATDE = 'A1 Telekom Austria AG';
      }
      if (this.imsi.startsWith('23213')) {
        this.operatorATDE = 'UPC Austria Services GmbH';
      }
      if (this.imsi.startsWith('23214')) {
        this.operatorATDE = 'Hutchison Drei Austria GmbH';
      }
      if (this.imsi.startsWith('23215')) {
        this.operatorATDE = 'Mundio mobile (Austria) Limited';
      }
      if (this.imsi.startsWith('23216')) {
        this.operatorATDE = 'Hutchison Drei Austria GmbH';
      }
      if (this.imsi.startsWith('23217')) {
        this.operatorATDE = 'MASS Response Service GmbH';
      }
      if (this.imsi.startsWith('23291')) {
        this.operatorATDE = 'ÖBB-Infrastruktur AG';
      }
    }
  }

}
