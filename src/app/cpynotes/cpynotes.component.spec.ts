import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CpynotesComponent } from './cpynotes.component';

describe('CpynotesComponent', () => {
  let component: CpynotesComponent;
  let fixture: ComponentFixture<CpynotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CpynotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CpynotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
