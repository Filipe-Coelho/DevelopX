import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppComponent } from './app.component';
import { BankService } from './bank.service';
import { CreateComponent } from './components/create/create.component';
import { EditComponent } from './components/edit/edit.component';
import { IndexComponent } from './components/index/index.component';
import { WithdrawComponent } from './components/withdraw/withdraw.component';
import { ClientComponent } from './components/client/client.component';
import { FilterPipeSearch } from './components/app.pipe.filter';

const routes: Routes = [
  {
    path: '',
    component: WithdrawComponent
  },
  {
    path: 'create',
    component: CreateComponent
  },
  {
    path: 'withdraw',
    component: WithdrawComponent
  },
  {
    path: 'edit',
    component: EditComponent,
    data:{history: history}
  },
  {
    path: 'index',
    component: IndexComponent
  },
  {
    path: 'clients',
    component: ClientComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    WithdrawComponent,
    IndexComponent,
    EditComponent,
    ClientComponent,
    FilterPipeSearch,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    SlimLoadingBarModule,
    HttpClientModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule, 
    Ng2OrderModule, 
    NgxPaginationModule
  ],
  providers: [ BankService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
