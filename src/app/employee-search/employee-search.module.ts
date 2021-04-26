import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { SearchListComponent } from './search-list/search-list.component';

@NgModule({
  declarations: [SearchComponent, SearchListComponent],
  imports: [
    CommonModule
  ]
})
export class EmployeeSearchModule { }
