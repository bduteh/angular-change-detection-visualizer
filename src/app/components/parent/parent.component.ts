import { Component, ElementRef, NgZone, OnInit } from '@angular/core';
import { ChangeDetectorVisualizerComponent } from '../../change-detector-visualizer/change-detector-visualizer.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: [
    './parent.component.css',
    './../../change-detector-visualizer/change-detector-visualizer.component.css',
  ],
})
export class ParentComponent extends ChangeDetectorVisualizerComponent {
  constructor(el: ElementRef<any>, zone: NgZone) {
    super(el, zone);
  }
}
