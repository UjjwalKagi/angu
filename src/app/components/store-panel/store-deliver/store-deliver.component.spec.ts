import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreDeliverComponent } from './store-deliver.component';

describe('StoreDeliverComponent', () => {
  let component: StoreDeliverComponent;
  let fixture: ComponentFixture<StoreDeliverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreDeliverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreDeliverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
