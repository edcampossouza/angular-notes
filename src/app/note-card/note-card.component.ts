import {
  Component,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.scss'],
})
export class NoteCardComponent implements OnInit {
  @Input() title: string = '';
  @Input() body: string = '';

  @ViewChild('truncator') truncator!: ElementRef<HTMLElement>;
  @ViewChild('bodytext') bodyText!: ElementRef<HTMLElement>;
  @ViewChild('notep') noteP!: ElementRef<HTMLElement>;

  constructor(private renderer: Renderer2) {}

  ngOnInit() {}
  ngAfterViewInit() {
    // work out if there is overflow, and show/hide the truncator accordingly
    let style = window.getComputedStyle(this.bodyText.nativeElement, null);

    if (
      this.noteP.nativeElement.clientHeight >
      this.bodyText.nativeElement.clientHeight
    ) {
      //there is overflow
      this.renderer.setStyle(this.truncator.nativeElement, 'display', 'block');
    } else {
      this.renderer.setStyle(this.truncator.nativeElement, 'display', 'none');
    }
  }
}
