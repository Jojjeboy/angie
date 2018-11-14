import { Component, OnInit } from '@angular/core';
import { AngularNgLocalstorageService } from 'angular-ng-localstorage';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  constructor(private angularNgLocalstorageService: AngularNgLocalstorageService) { }
  messages;
  ngOnInit() {
    this.angularNgLocalstorageService.init({}, 'angie-message');
    this.messages = this.angularNgLocalstorageService.getAll();
  }

  recieveMessage($event) {
    this.messages.push($event);
    this.angularNgLocalstorageService.add($event);
  }


}
