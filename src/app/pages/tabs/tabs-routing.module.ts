import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio'
  },

  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'inicio',
        loadChildren: '../inicio/inicio.module#InicioPageModule'
      },
      {
        path: 'programa',
        loadChildren: '../programa/programa.module#ProgramaPageModule'
      },
      {
        path: 'noticias',
        loadChildren: '../noticias/noticias.module#NoticiasPageModule'
      },
      {
        path: 'rrss',
        loadChildren: '../rrss/rrss.module#RrssPageModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
