import { NgModule } from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from "@angular/router";
import { MainViewComponent } from './pages/main-view/main-view.component';

const routes:Routes=[
  {path: '', component: MainViewComponent},
  {path: 'admin', loadChildren: ()=>import('./admin/admin.module').then(m=>m.AdminModule)},
]

@NgModule({

  imports: [
   RouterModule.forRoot(routes,
     {preloadingStrategy:PreloadAllModules}
     )
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
