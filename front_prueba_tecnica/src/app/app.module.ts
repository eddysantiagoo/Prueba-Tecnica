import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarStuffsComponent } from './listar-stuffs/listar-stuffs.component';
import { EditarStuffsComponent } from './editar-stuffs/editar-stuffs.component';
import { StuffService } from './shared/stuff.service';

@NgModule({
  declarations: [AppComponent, ListarStuffsComponent, EditarStuffsComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [StuffService],
  bootstrap: [AppComponent],
})
export class AppModule {}
