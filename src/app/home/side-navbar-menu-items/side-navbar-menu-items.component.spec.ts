import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavbarMenuItemsComponent } from './side-navbar-menu-items.component';

describe('SideNavbarMenuItemsComponent', () => {
  let component: SideNavbarMenuItemsComponent;
  let fixture: ComponentFixture<SideNavbarMenuItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideNavbarMenuItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavbarMenuItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
