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
  executedCommandsHistory: Array<string> = [];
  currentIndex = 0;

  constructor(private queryFunctionService: QueryFunctionService) { }

  ngOnInit(): void {
  }

  onKey(event: any) {
    if (event.code === "ArrowUp") {
      if (this.executedCommandsHistory[this.currentIndex] !== undefined) {
        event.target.value = this.executedCommandsHistory[this.currentIndex];  
      }
      this.currentIndex++;
    }
    if (event.code === "ArrowDown") {
      if (this.currentIndex != 0) {
        this.currentIndex--;
        if (this.executedCommandsHistory[this.currentIndex] !== undefined) {
          event.target.value = this.executedCommandsHistory[this.currentIndex];  
        }
      }
      else {
        event.target.value = "";
      }
    }
    if (event.code === 'Enter') {
      this.queryFunctionService.runFunction(event.target.value);
      this.executedCommandsHistory.unshift(event.target.value);
      this.executedCommandsHistory.slice(0, 6);
      event.target.value =  "";
      this.currentIndex = 0
      event.target.select();
    }

    this.queryFunctions = this.queryFunctionService.queryForFunction(event.target.value);

    
  }
}
