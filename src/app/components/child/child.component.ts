import { ElementRef, NgZone, Component } from '@angular/core';
import { ChangeDetectorVisualizerComponent } from '../../change-detector-visualizer/change-detector-visualizer.component';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: [
    './child.component.css',
    './../../change-detector-visualizer/change-detector-visualizer.component.css',
  ],
})
export class ChildComponent extends ChangeDetectorVisualizerComponent {
  constructor(el: ElementRef<any>, zone: NgZone) {
    super(el, zone);
  }

  public onClick(): void {
    console.log('click');
  }
}
