import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'app-message2',
  templateUrl: './message2.component.html',
  styleUrls: ['./message2.component.css']
})
export class Message2Component implements OnInit {

  constructor(private localStorageService: LocalStorageService) { }
  messages;
  ngOnInit() {
    this.localStorageService.init({}, 'angie-message2');
    this.messages = this.localStorageService.getAll();
  }

  recieveMessage2($event) {
    this.messages.push($event);
    this.localStorageService.add($event);
  }

}

