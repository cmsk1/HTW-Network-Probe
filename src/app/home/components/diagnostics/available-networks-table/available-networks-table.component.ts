import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {COPS} from '../../../../shared/data/cops';
import {COPSC} from '../../../../shared/data/copsc';
import {AvailableNetwork} from '../../../../shared/data/available-network';

@Component({
  selector: 'app-available-networks-table',
  templateUrl: './available-networks-table.component.html',
  styleUrls: ['./available-networks-table.component.scss']
})
export class AvailableNetworksTableComponent implements OnInit {

  @Input() values: COPS;
  @Input() current: COPSC;
  @Output() newItemEvent = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit(): void {
  }

  addRegisterString(value: string) {
    this.newItemEvent.emit(value);
  }

  prepareRegister(val: AvailableNetwork) {
    const str = 'AT+COPS=0,2,' + val.id + ',' + val.technology;
    this.addRegisterString(str);
  }
}
