import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HomeRoutingModule} from './home-routing.module';

import {HomeComponent} from './home.component';
import {SharedModule} from '../shared/shared.module';
import {DeviceComponent} from './components/diagnostics/device/device.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {AtCommandsComponent} from './components/diagnostics/at-commands/at-commands.component';

@NgModule({
  declarations: [HomeComponent, DeviceComponent, AtCommandsComponent],
  imports: [CommonModule, SharedModule, HomeRoutingModule, FontAwesomeModule]
})
export class HomeModule {
}
