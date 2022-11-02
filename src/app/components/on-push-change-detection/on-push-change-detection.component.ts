import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  NgZone,
} from '@angular/core';
import { Subject, take, takeUntil } from 'rxjs';
import { interval } from 'rxjs/internal/observable/interval';
import { ChangeDetectorVisualizerComponent } from '../../change-detector-visualizer/change-detector-visualizer.component';

@Component({
  selector: 'app-on-push-change-detection',
  templateUrl: './on-push-change-detection.component.html',
  styleUrls: [
    './on-push-change-detection.component.css',
    './../../change-detector-visualizer/change-detector-visualizer.component.css',
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OnPushChangeDetectionComponent extends ChangeDetectorVisualizerComponent {
  private destroyNotifier: Subject<void>;

  constructor(el: ElementRef<any>, zone: NgZone) {
    super(el, zone);
  }

  public ngOnDestroy(): void {
    this.destroyNotifier.next();
    this.destroyNotifier.complete();
  }

  public ngOnInit(): void {
    super.ngOnInit();
    this.destroyNotifier = new Subject();
    /*interval(1200)
      .pipe(take(2), takeUntil(this.destroyNotifier))
      .subscribe((value) => {
        console.log(value);
      });*/
  }

  public onClick(): void {
    console.log('click');
  }
}
