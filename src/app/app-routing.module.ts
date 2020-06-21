import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'llamadas',
    loadChildren: () => import('./llamadas/llamadas.module').then( m => m.LlamadasPageModule)
  },
  {
    path: '',
    redirectTo: 'llamadas',
    pathMatch: 'full'
  },
  {
    path: 'mensajes',
    loadChildren: () => import('./mensajes/mensajes.module').then( m => m.MensajesPageModule)
  },
  {
    path: 'audios',
    loadChildren: () => import('./audios/audios.module').then( m => m.AudiosPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
