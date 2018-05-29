import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import {MatFormFieldModule, MatSelectModule} from "@angular/material";
import {FlexLayoutModule} from "@angular/flex-layout";
import { ClickOutsideModule } from 'ng-click-outside';
import { RouterModule } from "@angular/router";


@NgModule({
  imports: [
    CommonModule,
    MatSelectModule,
    MatFormFieldModule,
    RouterModule,
    FlexLayoutModule,
    ClickOutsideModule
  ],
  declarations: [NavbarComponent],
  exports: [
    NavbarComponent
  ]
})
export class CoreModule { }
