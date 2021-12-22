import {RawData} from './raw-data';
import {AvailableNetwork} from './available-network';

export class COPS {
  info: string;
  current: AvailableNetwork;
  networks: AvailableNetwork[];

  constructor(raw: RawData[]) {
    this.current = null;
    this.networks = [];
    console.log(raw);
    for (const rawItem of raw) {
      if (rawItem.data.includes('+COPS:')) {
        this.info = rawItem.data.replace('+COPS: ', '').trim();
      }
    }
    // parse networks
    const split = this.info.replace(',(0,1,2,3,4),(0,1,2)', '').split('),');
    for (const eleStr of split) {
      const eleStrCleared = eleStr.replace('(', '').replace('+COPS:', '').trim();
      const net = eleStrCleared.split(',');
      if (net.length > 3) {
        const tmp = new AvailableNetwork();
        tmp.id = net[3].trim();
        tmp.name = net[1].trim();
        tmp.operator = net[2].trim();
        tmp.stat = Number(net[0]);
        tmp.technology = Number(net[4]);
        this.networks.push(tmp);
      }
    }
  }
}
