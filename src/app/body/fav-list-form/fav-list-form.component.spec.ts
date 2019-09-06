import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavListFormComponent } from './fav-list-form.component';

describe('FavListFormComponent', () => {
  let component: FavListFormComponent;
  let fixture: ComponentFixture<FavListFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavListFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavListFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
