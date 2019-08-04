import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentProjectComponent } from './student-project.component';

describe('StudentProjectComponent', () => {
  let component: StudentProjectComponent;
  let fixture: ComponentFixture<StudentProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
