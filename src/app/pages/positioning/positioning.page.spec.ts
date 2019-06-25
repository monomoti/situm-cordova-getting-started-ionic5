import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PositioningPage } from './positioning.page';

describe('PositioningPage', () => {
  let component: PositioningPage;
  let fixture: ComponentFixture<PositioningPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PositioningPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PositioningPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
