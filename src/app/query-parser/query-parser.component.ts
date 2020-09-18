import { Component, OnInit } from '@angular/core';
import { QueryFunctionService } from '../query-function.service';
import { QueryFunction } from '../query-function';

@Component({
  selector: 'app-query-parser',
  templateUrl: './query-parser.component.html',
  styleUrls: ['./query-parser.component.css']
})
export class QueryParserComponent implements OnInit {

  query: string;
  queryFunctions: QueryFunction[];

  constructor(private queryFunctionService: QueryFunctionService) { }

  ngOnInit(): void {
  }

  onKey(event: any) {

    this.queryFunctions = this.queryFunctionService.queryForFunction(event.target.value);
  }

}
