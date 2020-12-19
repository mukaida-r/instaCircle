import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingthComponent } from './settingth.component';

describe('SettingthComponent', () => {
  let component: SettingthComponent;
  let fixture: ComponentFixture<SettingthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SettingthComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
