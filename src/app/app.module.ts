import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AjudarComponent } from './ajudar/ajudar.component';
import { InicioComponent } from './inicio/inicio.component';
import { CadastrosComponent } from './cadastros/cadastros.component';
import { DoacaoComponent } from './doacao/doacao.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AjudarComponent,
    InicioComponent,
    CadastrosComponent,
    DoacaoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '', component: InicioComponent
      },
      {
        path: 'ajudar', component: AjudarComponent
      },
      {
        path: '', redirectTo: 'inicio', pathMatch: 'full'
      }

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
