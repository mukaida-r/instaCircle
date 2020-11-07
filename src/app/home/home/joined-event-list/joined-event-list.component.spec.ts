import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinedEventListComponent } from './joined-event-list.component';

describe('JoinedEventListComponent', () => {
  let component: JoinedEventListComponent;
  let fixture: ComponentFixture<JoinedEventListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [JoinedEventListComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinedEventListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
