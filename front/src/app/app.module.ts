import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddFuncionarioComponent } from './add-funcionario/add-funcionario.component';
import { EditFuncionarioComponent } from './edit-funcionario/edit-funcionario.component';
import { GetFuncionarioComponent } from './get-funcionario/get-funcionario.component';

@NgModule({
  declarations: [
    AppComponent,
    AddFuncionarioComponent,
    EditFuncionarioComponent,
    GetFuncionarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
