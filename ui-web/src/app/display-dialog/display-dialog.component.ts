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

  private subscription: Subscription; // = this.refreshInterval.subscribe(result => this.data = result);
  private count = 0;

  constructor(public thisDialogRef: MatDialogRef<DisplayDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: Object, private http: HttpClient) {}

  ngOnInit() {
    // subscribe
    this.subscription = timer(0, this.data.interval)
                         .pipe(
                            switchMap(() => this.load()) //// switchMap cancels the last request, if no response have been received since last tick
                         )
                         .subscribe(result => this.data = result);
  }
  ngOnDestroy() {
      this.subscription.unsubscribe();
  }

  onCloseConfirm() {
    this.thisDialogRef.close(`You've watched ${this.count} words`);
  }

  load() {
    this.count ++;
    return this.http.get(this.configUrl);
  }
}
