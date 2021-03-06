import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './components/profile/profile.component';
import { ProfileRoutingModule } from './profile.router';

@NgModule({
  imports: [
    CommonModule,
    ProfileRoutingModule,
  ],
  declarations: [ProfileComponent]
})

export class ProfileModule { }
