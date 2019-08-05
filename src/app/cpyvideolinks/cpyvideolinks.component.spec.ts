import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CpyvideolinksComponent } from './cpyvideolinks.component';

describe('CpyvideolinksComponent', () => {
  let component: CpyvideolinksComponent;
  let fixture: ComponentFixture<CpyvideolinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CpyvideolinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CpyvideolinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
