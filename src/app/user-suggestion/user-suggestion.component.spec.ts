import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSuggestionComponent } from './user-suggestion.component';

describe('UserSuggestionComponent', () => {
  let component: UserSuggestionComponent;
  let fixture: ComponentFixture<UserSuggestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserSuggestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSuggestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
