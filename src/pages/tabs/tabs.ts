import { Component } from '@angular/core';
import { SettingsPage } from '../settings/settings';
import { BookListPage } from '../book-list/book-list';
import { CdListPage } from '../cd-list/cd-list';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {
  settingsPage = SettingsPage;
  bookListPage= BookListPage;
  cdListPage = CdListPage;
}