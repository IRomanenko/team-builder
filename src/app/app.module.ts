import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProfileModule } from './profile/profile.module';
import { AppRoutingModule } from './app.routing';
import { DashboardModule } from './dashboard/dashboard.module';

import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AuthService } from './auth/auth.service';

/* Common */
import { TbNavComponent } from './common/components/tb-nav/tb-nav.component';

@NgModule({
  imports: [
    BrowserModule,
    ProfileModule,
    DashboardModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule
  ],
  declarations: [
    AppComponent,
    TbNavComponent
  ],
  providers: [AuthService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
