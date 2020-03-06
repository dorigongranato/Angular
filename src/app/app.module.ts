import {BrowserModule} from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';
import {registerLocaleData} from '@angular/common';
import localePt from '@angular/common/locales/pt';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from './shared/material/material.module';
import {TransacoesComponent} from './transacoes/transacoes.component';
import {HistoricoComponent} from './historico/historico.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ClientListItemComponent } from './client-list-item/client-list-item.component';
import { ClientDetailsComponent } from './client-details/client-details.component';
import { CpfPipe } from './pipes/cpf.pipe';
import { SearchClientsPipe } from './pipes/search-clients.pipe';
import { DateFormatDirective } from './directives/date-format.directive';

registerLocaleData(localePt, 'pt');

@NgModule({
  declarations: [
    AppComponent,
    TransacoesComponent,
    HistoricoComponent,
    ClientListItemComponent,
    ClientDetailsComponent,
    CpfPipe,
    SearchClientsPipe,
    DateFormatDirective,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'pt'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
