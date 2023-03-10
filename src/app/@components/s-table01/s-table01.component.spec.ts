import { ComponentFixture, TestBed } from '@angular/core/testing';

import { STable01Component } from './s-table01.component';

describe('STable01Component', () => {
  let component: STable01Component;
  let fixture: ComponentFixture<STable01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ STable01Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(STable01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
