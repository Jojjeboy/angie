import { Component, OnInit, Output, EventEmitter, Input, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit, AfterViewInit {

  message: '';

  @Output() messageEvent = new EventEmitter<string>();

  @Input() placeholder: string;

  @ViewChild('messageInput', {static: false}) messageInputElementRef: ElementRef;
  ngAfterViewInit(){
    this.messageInputElementRef.nativeElement.focus();
  }


  onKeydown(event: any) {
    if (event.key === 'Enter') {
      if (this.message.length) {
        this.messageEvent.emit(this.message);
        this.resetMessageField();
      }
    }
  }

  resetMessageField() {
    this.message = '';
  }

  ngOnInit() {
    this.resetMessageField();
    if (this.placeholder === null) {
      this.placeholder = 'Default placeolder';
    }
  }

}
