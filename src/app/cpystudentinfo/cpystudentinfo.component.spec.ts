import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CpystudentinfoComponent } from './cpystudentinfo.component';

describe('CpystudentinfoComponent', () => {
  let component: CpystudentinfoComponent;
  let fixture: ComponentFixture<CpystudentinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CpystudentinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CpystudentinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
