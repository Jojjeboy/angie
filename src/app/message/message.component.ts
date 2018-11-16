import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  constructor(private localStorageService: LocalStorageService) { }
  messages;
  ngOnInit() {
    this.localStorageService.init({}, 'angie-message');
    this.messages = this.localStorageService.getAll().reverse();
  }

  recieveMessage($event) {
    this.messages.unshift($event);
    this.localStorageService.add($event);
  }


  removeMsg(msg: string) {
    this.messages.splice(this.messages.lastIndexOf(msg), 1);
    this.localStorageService.writeLS(this.messages);
  }
}
