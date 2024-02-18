import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-boutton-action',
  templateUrl: './boutton-action.component.html',
  styleUrls: ['./boutton-action.component.scss']
})
export class BouttonActionComponent implements OnInit {
  @Input()
  isImporterVisible = true;
  @Input()
  isExporterVisible = true;
  @Input()
  isNouveauVisible = true;

  @Output()
  clickEvent = new EventEmitter();
  @Output()
  clickEvent1 = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  buttonNouveauClick(): void {
    this.clickEvent.emit();
  }
  buttonExporterClick(): void {
    this.clickEvent1.emit();
  }

}
