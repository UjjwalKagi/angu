import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreAvaliableComponent } from './store-avaliable.component';

describe('StoreAvaliableComponent', () => {
  let component: StoreAvaliableComponent;
  let fixture: ComponentFixture<StoreAvaliableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreAvaliableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreAvaliableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
