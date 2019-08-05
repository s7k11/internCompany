import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CpyreqinternComponent } from './cpyreqintern.component';

describe('CpyreqinternComponent', () => {
  let component: CpyreqinternComponent;
  let fixture: ComponentFixture<CpyreqinternComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CpyreqinternComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CpyreqinternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
