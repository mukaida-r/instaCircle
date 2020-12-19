import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteAccountDialogComponent } from 'src/app/delete-account-dialog/delete-account-dialog.component';

@Component({
  selector: 'app-settingth',
  templateUrl: './settingth.component.html',
  styleUrls: ['./settingth.component.scss'],
})
export class SettingthComponent implements OnInit {
  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  openDeleteAccountDialog() {
    this.dialog.open(DeleteAccountDialogComponent, {
      width: '400px',
      autoFocus: false,
      restoreFocus: false,
    });
  }
}
