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
import { DoarComponent } from './doarcad/doar.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AjudarComponent,
    InicioComponent,
    CadastrosComponent,
    DoacaoComponent,
    DoarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: '', component: InicioComponent
      },
      {
        path: 'ajuda', component: AjudarComponent
      },
      {
        path: 'cadastro', component: CadastrosComponent
      },
      {
        path: 'lista', component: DoacaoComponent
      },
      {
        path: 'doar', component: DoarComponent
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
