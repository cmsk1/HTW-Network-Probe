import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HomeRoutingModule} from './home-routing.module';

import {HomeComponent} from './home.component';
import {SharedModule} from '../shared/shared.module';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {
  SignalQualityChartComponent
} from './components/monitoring/charts/signal-quality-chart/signal-quality-chart.component';
import {ChartModule} from 'primeng/chart';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {RippleModule} from 'primeng/ripple';
import {TooltipModule} from 'primeng/tooltip';
import {
  AvailableNetworksTableComponent
} from './components/diagnostics/available-networks-table/available-networks-table.component';
import {NetworkComponent} from './components/monitoring/charts/network/network.component';

@NgModule({
  declarations: [HomeComponent, SignalQualityChartComponent, AvailableNetworksTableComponent, NetworkComponent],
  imports: [CommonModule, SharedModule, HomeRoutingModule, FontAwesomeModule, ChartModule, TableModule, ButtonModule, RippleModule, TooltipModule]
})
export class HomeModule {
}
