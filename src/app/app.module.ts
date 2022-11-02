import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { OnPushChangeDetectionComponent } from './components/on-push-change-detection/on-push-change-detection.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    OnPushChangeDetectionComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
