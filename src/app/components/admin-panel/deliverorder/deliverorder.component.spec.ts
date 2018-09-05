import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliverorderComponent } from './deliverorder.component';

describe('DeliverorderComponent', () => {
  let component: DeliverorderComponent;
  let fixture: ComponentFixture<DeliverorderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliverorderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliverorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
