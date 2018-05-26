import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import {MatFormFieldModule, MatSelectModule} from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    MatSelectModule,
    MatFormFieldModule
  ],
  declarations: [NavbarComponent],
  exports: [
    NavbarComponent
  ]
})
export class CoreModule { }
