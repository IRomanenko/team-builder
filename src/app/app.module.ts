import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ProfileModule } from './profile/profile.module';
import { AppRoutingModule } from './app.routing';
import { DashboardModule } from './dashboard/dashboard.module';

/* Common */
import { TbNavComponent } from './common/components/tb-nav/tb-nav.component';

@NgModule({
  imports: [
    BrowserModule,
    ProfileModule,
    DashboardModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    TbNavComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
