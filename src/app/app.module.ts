import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { MyApp } from './app.component';
import { TodosPage } from '../pages/todos/todos';
import { AddPage } from '../pages/add/add';
import { Data } from '../providers/data';

@NgModule({
  declarations: [
    MyApp,
    TodosPage,
    AddPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TodosPage,
    AddPage
  ],
  providers: [Storage, Data]
})
export class AppModule {}
