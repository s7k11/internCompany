import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CpypdfsComponent } from './cpypdfs.component';

describe('CpypdfsComponent', () => {
  let component: CpypdfsComponent;
  let fixture: ComponentFixture<CpypdfsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CpypdfsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CpypdfsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
