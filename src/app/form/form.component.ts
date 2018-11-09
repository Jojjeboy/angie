import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Event } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  message: '';

  @Output() messageEvent = new EventEmitter<string>();

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
  }

}
