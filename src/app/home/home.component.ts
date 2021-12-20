import {Component, OnInit} from '@angular/core';
import { faEthernet, faSatelliteDish, faWifi, faMicrochip, faSms, faTerminal, faAddressBook } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  faEthernet = faEthernet;
  faSatelliteDish = faSatelliteDish;
  faWifi = faWifi;
  faMicrochip = faMicrochip;
  faSms = faSms;
  faTerminal = faTerminal;
  faAddressBook = faAddressBook;

  tab: string;
  simStatus = 'SIM not inserted';
  deviceStatus = 'ready';
  signal = -52;

  constructor() {
    this.tab = 'connect';
  }

  ngOnInit(): void {
  }

}
