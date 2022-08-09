import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { TEXT_CONSTANTS } from '../common/constants/constants';
import { CommonDialogComponent } from '../common/dialog/common-dialog/common-dialog.component';

@Component({
  selector: 'app-how-it-works',
  templateUrl: './how-it-works.component.html',
  styleUrls: ['./how-it-works.component.scss']
})
export class HowItWorksComponent implements OnInit {

  constructor(
    public router: Router,
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
  }
  openDialog(action: number): void {
    let title: string;
    let message: string;
    switch (action) {
      case 2:
        title = TEXT_CONSTANTS.CONTACT_TITLE;
        message = TEXT_CONSTANTS.CONTACT_MESSAGE;
        break;
      case 3:
        title = TEXT_CONSTANTS.POLICY_TITLE;
        message = TEXT_CONSTANTS.POLICY_MESSAGE;
        break;
      case 4:
        title = TEXT_CONSTANTS.ABOUT_TITLE;
        message = TEXT_CONSTANTS.ABOUT_MESSAGE;
        break;
      case 5:
        title = TEXT_CONSTANTS.TRANSFER_TITLE;
        message = TEXT_CONSTANTS.TRANSFER_TEXT;
        break;
    }
    const dialogRef = this.dialog.open(CommonDialogComponent, {
      width: "550px",
      data: {
        title: title,
        message: message,
      },
    });
    dialogRef.afterClosed();
  }

}
