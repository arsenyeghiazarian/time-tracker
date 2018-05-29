import {TimerComponent} from "./pages/components/timer/timer.component";
import {DashboardComponent} from "./pages/components/dashboard/dashboard.component";
import {Routes} from "@angular/router";

export const routes: Routes = [
  { path: '', redirectTo: '/timer', pathMatch: 'full' },
  {
    path: 'timer',
    component: TimerComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  }
]
