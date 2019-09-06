import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularpostComponent } from './popularpost.component';

describe('PopularpostComponent', () => {
  let component: PopularpostComponent;
  let fixture: ComponentFixture<PopularpostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopularpostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
