import { Component, OnInit } from '@angular/core';
import { MessageService} from '../../service/message/message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  messages!: string[];

  constructor(public messageService: MessageService) {}

  ngOnInit(): void {
    this.messages = this.messageService.messages;
  }

  clear(): void {
    this.messageService.clear();
  }
}
