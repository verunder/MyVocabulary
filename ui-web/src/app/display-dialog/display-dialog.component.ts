//  import { Component, OnInit } from '@angular/core';
import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { MatDialogRef } from '@angular/material';
import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Subscription, Observable, timer, pipe } from 'rxjs';
import { switchMap, takeUntil, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-display-dialog',
  templateUrl: './display-dialog.component.html',
  styleUrls: ['./display-dialog.component.scss']
})

export class DisplayDialogComponent implements OnInit {

  private configUrl: string = 'http://localhost:3000';

  private fetchData$: Observable<any> = this.http.get(this.configUrl);
//   private refreshInterval: Observable<any> = timer(0, 1000)
//   .pipe(
//     // This kills the request if the user closes the component
//     takeUntil(this.killTrigger),
//     // switchMap cancels the last request, if no response have been received since last tick
//     switchMap(() => this.fetchData$),
//     // catchError handles http throws
//     catchError(error => of('Error'))
//   );
  private subscription: Subscription; // = this.refreshInterval.subscribe(result => this.data = result);

  constructor(public thisDialogRef: MatDialogRef<DisplayDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: Object, private http: HttpClient) {}

  ngOnInit() {
    // subscribe
   this.subscription = timer(0, 1000)
                         .pipe(
                           // switchMap cancels the last request, if no response have been received since last tick
                           switchMap(() => this.load())
                         ).subscribe(result => this.data = result);
   console.log("init");
  }
  ngOnDestroy() {
      this.subscription.unsubscribe();
  }

  onCloseConfirm() {
    //this.subscription.unsubscribe();
    this.thisDialogRef.close('Confirm');
  }
  onCloseCancel() {
    //this.subscription.unsubscribe();
    this.thisDialogRef.close('Cancel');
  }
  load() {
    return this.http.get(this.configUrl);
  }
}
