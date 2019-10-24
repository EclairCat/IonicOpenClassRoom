import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

//Component
import { MyApp } from './app.component';
import { SettingsPage } from '../pages/settings/settings';
import { TabsPage } from '../pages/tabs/tabs';

//Livre et CD
import { BookListPage } from '../pages/book-list/book-list';
import { LendBookPage } from '../pages/book-list/lend-book/lend-book';

import { CdListPage } from '../pages/cd-list/cd-list';
import { LendCdPage } from '../pages/cd-list/lend-cd/lend-cd';


//Service
import { CdsService } from '../services/cds.service';
import { LivreService } from '../services/livres.service';

@NgModule({
  declarations: [
    MyApp,
    SettingsPage,
    TabsPage,
    BookListPage,
    LendBookPage,
    CdListPage,
    LendCdPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SettingsPage,
    TabsPage,
    BookListPage,
    LendBookPage,
    CdListPage,
    LendCdPage
  ],
  providers: [
    LivreService,
    CdsService,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
