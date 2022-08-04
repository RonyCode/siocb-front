import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './errors/page-not-found/page-not-found.component';
import { LoginComponent } from './core/login/login.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },

  {
    path: 'ocorrencias',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },

  {
    path: '**',
    component: PageNotFoundComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
