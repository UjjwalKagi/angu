import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvaliableorderComponent } from './avaliableorder.component';

describe('AvaliableorderComponent', () => {
  let component: AvaliableorderComponent;
  let fixture: ComponentFixture<AvaliableorderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvaliableorderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvaliableorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
