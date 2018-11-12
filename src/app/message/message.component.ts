import { Component, OnInit } from '@angular/core';
import { StorageService} from '../storage.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  constructor(private storageService: StorageService) { }
  messages;
  ngOnInit() {
    this.storageService.init({}, 'angie-message');
    this.messages = this.storageService.getAll();
  }

  recieveMessage($event) {
    this.messages.push($event);
    this.storageService.add($event);
  }


}
