import {NgModule} from '@angular/core';
import {TimerComponent} from "./pages/components/timer/timer.component";
import {DashboardComponent} from "./pages/components/dashboard/dashboard.component";
import {RouterModule, Routes} from "@angular/router";
import {NavbarComponent} from "./core/components/navbar/navbar.component";


const routes: Routes = [
  { path: '', redirectTo: '/timer', pathMatch: 'full' },
  {
    path: 'timer',
    component: TimerComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'navbar',
    component: NavbarComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
