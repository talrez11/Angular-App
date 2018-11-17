import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex4ParentComponent } from './ex4-parent.component';

describe('Ex4ParentComponent', () => {
  let component: Ex4ParentComponent;
  let fixture: ComponentFixture<Ex4ParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ex4ParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex4ParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
