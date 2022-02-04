import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdddialogReactiveComponent } from './adddialog-reactive.component';

describe('AdddialogReactiveComponent', () => {
  let component: AdddialogReactiveComponent;
  let fixture: ComponentFixture<AdddialogReactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdddialogReactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdddialogReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
