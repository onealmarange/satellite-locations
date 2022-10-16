import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortalContainerComponent } from './components/portal-container/portal-container.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'auth' },
  {
    path: 'auth',
    loadChildren: () =>
      import('src/app/modules/authentication/authentication.module').then(
        (m) => m.AuthenticationModule
      ),
  },
  {
    path: 'portal',
    component: PortalContainerComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'satellites' },
      {
        path: 'satellites',
        loadChildren: () =>
          import('src/app/modules/satellites/satellites.module').then(
            (m) => m.SatellitesModule
          ),
      },
      {
        path: 'map',
        loadChildren: () =>
          import('src/app/modules/map/map.module').then((m) => m.MapModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
