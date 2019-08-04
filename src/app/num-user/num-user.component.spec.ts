import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumUserComponent } from './num-user.component';

describe('NumUserComponent', () => {
  let component: NumUserComponent;
  let fixture: ComponentFixture<NumUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
