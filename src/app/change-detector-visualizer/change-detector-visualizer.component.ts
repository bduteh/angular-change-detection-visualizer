import { Component, ElementRef, NgZone, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-detector-visualizer',
  template: ``,
  styles: [],
})
export class ChangeDetectorVisualizerComponent implements OnInit {
  private changeDetectionsCycles: number;

  constructor(protected el: ElementRef<any>, protected zone: NgZone) {}

  public ngOnInit(): void {
    this.changeDetectionsCycles = 0;
  }

  public changeCheck(): void {
    console.log('before', this.changeDetectionsCycles)
    this.changeDetectionsCycles++;
    console.log('after', this.changeDetectionsCycles)

    this.el.nativeElement.setAttribute(
      'data-change-detections-cycles',
      this.changeDetectionsCycles
    );

    this.el.nativeElement.classList.add('highlight');

    this.zone.runOutsideAngular(() => {
      setTimeout(() => {
        this.el.nativeElement.classList.remove('highlight');
      }, 1500);
    });
  }
}
