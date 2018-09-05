import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreeditComponent } from './storeedit.component';

describe('StoreeditComponent', () => {
  let component: StoreeditComponent;
  let fixture: ComponentFixture<StoreeditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
