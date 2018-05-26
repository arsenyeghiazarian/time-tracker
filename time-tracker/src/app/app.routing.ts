import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AuthGuard } from '../core/guards/auth.guard';
import {TimerComponent} from "./pages/components/timer/timer.component";
import {DashboardComponent} from "./pages/components/dashboard/dashboard.component";
import { provideRouter, RouterConfig } from '@angular/router';

export const appRouting: RouterConfig = [
  {
    path: 'app',
    canActivate: [AuthGuard],
    resolve: {
      types: TypesResolver,
      countries: CountriesResolver,
      chapters: ChaptersResolver
    },
    children: [
      {
        path: 'timer',
        pathMatch: 'full',
        component: TimerComponent
      },
      {
        path: 'dashboard',
        pathMatch: 'full',
        component: DashboardComponent
      }
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(appRouting);
