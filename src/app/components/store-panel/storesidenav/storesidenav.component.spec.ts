import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoresidenavComponent } from './storesidenav.component';

describe('StoresidenavComponent', () => {
  let component: StoresidenavComponent;
  let fixture: ComponentFixture<StoresidenavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoresidenavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoresidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
