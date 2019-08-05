import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CpyprofileComponent } from './cpyprofile.component';

describe('CpyprofileComponent', () => {
  let component: CpyprofileComponent;
  let fixture: ComponentFixture<CpyprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CpyprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CpyprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
