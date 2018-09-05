import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyitemslistComponent } from './myitemslist.component';

describe('MyitemslistComponent', () => {
  let component: MyitemslistComponent;
  let fixture: ComponentFixture<MyitemslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyitemslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyitemslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
