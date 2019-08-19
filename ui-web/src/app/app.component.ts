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

  title = 'my-vocab';
  dialogResult = "";
  openDialog = function(){
  let dialogRef = this.dialog.open(DisplayDialogComponent, {
        width: '80%',
        data: {
        WORD: 'WORD',
        DEFINITION: 'Definition'
        }
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog closed: ${result}`);
        this.dialogResult = result;
      });
  };
}
