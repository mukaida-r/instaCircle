import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinEventDialogComponent } from './join-event-dialog.component';

describe('JoinEventDialogComponent', () => {
  let component: JoinEventDialogComponent;
  let fixture: ComponentFixture<JoinEventDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [JoinEventDialogComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinEventDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
