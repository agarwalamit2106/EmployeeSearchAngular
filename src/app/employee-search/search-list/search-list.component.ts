import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaderResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { EmployeeSearchService } from '../employee-search.service';
import { employeeSearch } from '../employeeSearch.model';
import { employeeFilter } from '../employeeFilter.model';
import { HttpParams } from "@angular/common/http";
import { DatePipe } from '@angular/common'

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss']
})
export class SearchListComponent implements OnInit {
  protected url = 'https://localhost:44316/api/Employee';
  protected urlSearch = 'https://localhost:44316/api/Employee/Search';
  employees: employeeSearch[] = [];
  //employeeFilter1 : { searchingName, startDateEmployement, endDateEmployement }= { searchingName="amit" };
  
  constructor(private SearchService: EmployeeSearchService,protected httpClient: HttpClient) { }

  ngOnInit() {
    this.httpClient
    .get<employeeSearch[]>(this.url)
    .subscribe(emps => (this.employees = emps));

    
  }
  SearchClick(name:string, startDate:any, endDate:any){
    // const opts = { params: new HttpParams({fromString: "?name='"+ searchingName +"'&startDate="+ startEmploymentDate +"&endDate="+ endEmploymentDate +""}) }
    let postObj: employeeFilter;
    postObj = new employeeFilter()
    {
      postObj.SearchingName = name;
      postObj.StartDateEmployement = new Date(startDate);
      postObj.EndDateEmployement= new Date(endDate);
    }
    let header = new HttpHeaders().set('content-type', 'application/json').set('Access-Control-Allow-Origin', '*');
    console.log(postObj);
    this.httpClient.post('https://localhost:44316/api/Employee/Search', JSON.stringify(postObj),
      { headers: header  }).subscribe(data => {
      this.employees = [];
      alert(data);
      console.log(data);
      var call = this.ngOnInit;
      call();

  })

  }

  
    // const employeeObservable = this.SearchService.getEmployees();
    // employeeObservable.subscribe((studentsData: employeeSearch[]) => {
    //     this.employees = studentsData;
    // });
 //}
}
