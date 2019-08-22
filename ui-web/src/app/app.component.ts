import { Component } from '@angular/core';
import {MatDialog} from '@angular/material';
import { DisplayDialogComponent } from './display-dialog/display-dialog.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public dialog: MatDialog) {}

  title = 'Vocabulary extension';
  dialogResult = "";
  private interval = 3;
  openDialog = function(){

      let dialogRef = this.dialog.open(DisplayDialogComponent, {
            width: '80%',
            data: {
                WORD: 'WORD',
                DEFINITION: 'Definition',
                interval: this.interval * 1000
            }
          });
          dialogRef.afterClosed().subscribe(result => {
            this.dialogResult = result;
          });
  };
  updateInterval = function(value) {
    this.interval = parseFloat(value) || 3 ;
  }
}
