import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CcontactusComponent } from './ccontactus.component';

describe('CcontactusComponent', () => {
  let component: CcontactusComponent;
  let fixture: ComponentFixture<CcontactusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CcontactusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CcontactusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
