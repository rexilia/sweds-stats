import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    //data: { redirectUnauthorizedToLogin },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'migration',
      },
      {
        path: 'seeall',
        loadChildren: () =>
          import('../population/population.module').then(
            (m) => m.PopulationModule
          ),
      },
      {
        path: 'migration',
        loadChildren: () =>
          import('../immigration/immigration.module').then(
            (m) => m.ImmigrationModule
          ),
      },
      {
        path: 'environment',
        loadChildren: () =>
          import('../environment/environment.module').then(
            (m) => m.EnvironmentModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppShellRoutingModule {}
