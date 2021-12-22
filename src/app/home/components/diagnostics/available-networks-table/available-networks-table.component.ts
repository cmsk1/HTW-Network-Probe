import {Component, Input, OnInit} from '@angular/core';
import {COPS} from '../../../../shared/data/cops';
import {COPSC} from '../../../../shared/data/copsc';

@Component({
  selector: 'app-available-networks-table',
  templateUrl: './available-networks-table.component.html',
  styleUrls: ['./available-networks-table.component.scss']
})
export class AvailableNetworksTableComponent implements OnInit {

  @Input() values: COPS;
  @Input() current: COPSC;

  constructor() { }

  ngOnInit(): void {
  }

}
