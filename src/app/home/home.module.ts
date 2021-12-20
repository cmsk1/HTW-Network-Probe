import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HomeRoutingModule} from './home-routing.module';

import {HomeComponent} from './home.component';
import {SharedModule} from '../shared/shared.module';
import {ChatComponent} from './components/chat/chat.component';
import { DeviceComponent } from './components/diagnostics/device/device.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [HomeComponent, ChatComponent, DeviceComponent],
  imports: [CommonModule, SharedModule, HomeRoutingModule, FontAwesomeModule]
})
export class HomeModule {
}
