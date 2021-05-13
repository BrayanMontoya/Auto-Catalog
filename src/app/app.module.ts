import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { VistasComponent } from './vistas/vistas.component';
import { ListComponent } from './list/list.component';
import { TableComponent } from './table/table.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HijoTablaComponent } from './table/hijo-tabla/hijo-tabla.component';
import { HttpClientModule } from '@angular/common/http';
import { ModalAddUpdateComponent } from './modal-add-update/modal-add-update.component';
import { ModalDetallesAutoComponent } from './modal-detalles-auto/modal-detalles-auto.component';
import { FormsModule, NgForm } from '@angular/forms';
import { ForbiddenValidatorDirective} from './directives/forbidden-name.directive';
import { FormatoModelosPipe } from './pipes/formato-modelos.pipe';
import { HighlightDirective } from './directives/highlight.directive';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { LogComponent } from './log/log.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    VistasComponent,
    ListComponent,
    TableComponent,
    PageNotFoundComponent,
    HijoTablaComponent,
    ModalAddUpdateComponent,
    ModalDetallesAutoComponent,
    ForbiddenValidatorDirective,
    FormatoModelosPipe,
    HighlightDirective,
    LogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ModalDetallesAutoComponent, ModalAddUpdateComponent]
})
export class AppModule { }
