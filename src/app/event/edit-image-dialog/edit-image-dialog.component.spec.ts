import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditImageDialogComponent } from './edit-image-dialog.component';

describe('EditImageDialogComponent', () => {
  let component: EditImageDialogComponent;
  let fixture: ComponentFixture<EditImageDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EditImageDialogComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditImageDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
