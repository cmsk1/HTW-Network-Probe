import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HomeRoutingModule} from './home-routing.module';

import {HomeComponent} from './home.component';
import {SharedModule} from '../shared/shared.module';
import {DeviceComponent} from './components/diagnostics/device/device.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {AtCommandsComponent} from './components/diagnostics/at-commands/at-commands.component';
import {
  SignalQualityChartComponent
} from './components/monitoring/charts/signal-quality-chart/signal-quality-chart.component';
import {ChartModule} from 'primeng/chart';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {RippleModule} from 'primeng/ripple';
import {TooltipModule} from 'primeng/tooltip';

@NgModule({
  declarations: [HomeComponent, DeviceComponent, AtCommandsComponent, SignalQualityChartComponent],
  imports: [CommonModule, SharedModule, HomeRoutingModule, FontAwesomeModule, ChartModule, TableModule, ButtonModule, RippleModule, TooltipModule]
})
export class HomeModule {
}
