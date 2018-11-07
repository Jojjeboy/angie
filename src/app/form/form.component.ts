import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  message: '';

  @Output() messageEvent = new EventEmitter<string>();

  onSubmit(data: any, event: Event) {
    alert(data);
    console.log(data);
    console.log(event);
    event.preventDefault();
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
