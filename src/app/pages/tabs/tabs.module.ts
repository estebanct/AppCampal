import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabsPageRoutingModule } from './tabs-routing.module';

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
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabsPageRoutingModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
