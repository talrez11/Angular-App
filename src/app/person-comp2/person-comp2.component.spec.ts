import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonComp2Component } from './person-comp2.component';

describe('PersonComp2Component', () => {
  let component: PersonComp2Component;
  let fixture: ComponentFixture<PersonComp2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonComp2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonComp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
