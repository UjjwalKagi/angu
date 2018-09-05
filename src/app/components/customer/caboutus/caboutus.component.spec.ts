import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaboutusComponent } from './caboutus.component';

describe('CaboutusComponent', () => {
  let component: CaboutusComponent;
  let fixture: ComponentFixture<CaboutusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaboutusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaboutusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
