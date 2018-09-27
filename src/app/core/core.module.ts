import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { HeaderComponent } from './header/header.component';
import { ShellComponent } from './shell/shell.component';
import { SidenavComponent } from './sidenav/sidenav.component';

@NgModule({
  imports: [CommonModule, MaterialModule, RouterModule, AngularFireAuthModule],
  exports: [ShellComponent],
  declarations: [HeaderComponent, ShellComponent, SidenavComponent]
})
export class CoreModule {}
