import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogDataModel } from '../../Models/DialogDataModel';

@Component({
  selector: 'app-common-dialog',
  templateUrl: './common-dialog.component.html',
  styleUrls: []
})

export class CommonDialogComponent {
  // Modal details
  constructor(
    public dialogRef: MatDialogRef<CommonDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogDataModel) {}

  /**
   * This function closes the dialog when the click is outside the dialog
   *
   * @memberof CommonDialogComponent
   */
  onNoClick(): void {
    this.dialogRef.close();
  }
}
