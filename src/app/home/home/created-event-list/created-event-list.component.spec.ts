import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatedEventListComponent } from './created-event-list.component';

describe('CreatedEventListComponent', () => {
  let component: CreatedEventListComponent;
  let fixture: ComponentFixture<CreatedEventListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CreatedEventListComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatedEventListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
