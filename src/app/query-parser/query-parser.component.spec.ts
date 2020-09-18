import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryParserComponent } from './query-parser.component';

describe('QueryParserComponent', () => {
  let component: QueryParserComponent;
  let fixture: ComponentFixture<QueryParserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QueryParserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QueryParserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
