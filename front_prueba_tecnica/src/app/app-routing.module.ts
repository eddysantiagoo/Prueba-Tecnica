import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarStuffsComponent } from './listar-stuffs/listar-stuffs.component';
import { EditarStuffsComponent } from './editar-stuffs/editar-stuffs.component';

const routes: Routes = [
  { path: 'stuffs', component: ListarStuffsComponent},
  { path: 'stuffs/editar/:id', component: EditarStuffsComponent},
  { path: 'stuffs/agregar', component: EditarStuffsComponent},
  { path: '**', redirectTo:'/stuffs', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
