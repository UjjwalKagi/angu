import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangestorepasswordComponent } from './changestorepassword.component';

describe('ChangestorepasswordComponent', () => {
  let component: ChangestorepasswordComponent;
  let fixture: ComponentFixture<ChangestorepasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangestorepasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangestorepasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
