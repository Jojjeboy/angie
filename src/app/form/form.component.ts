import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  message: '';

  @Output() messageEvent = new EventEmitter<string>();

  sendMessage() {
    if (this.message.length) {

      this.messageEvent.emit(this.message);
      this.resetMessageField();
    }
  }

  resetMessageField() {
    this.message = '';
  }

  constructor() { }

  ngOnInit() {
    this.resetMessageField();
  }

}
