import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddFuncionarioComponent } from './add-funcionario/add-funcionario.component';
import { EditFuncionarioComponent } from './edit-funcionario/edit-funcionario.component';
import { GetFuncionarioComponent } from './get-funcionario/get-funcionario.component';



const routes: Routes = [
  {
    path: 'funcionario',
    component: GetFuncionarioComponent
  },
  {
    path: 'funcionario/create',
    component: AddFuncionarioComponent
  },
  {
    path: 'funcionario/edit/:id',
    component: EditFuncionarioComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
