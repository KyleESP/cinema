import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages = Array<{message: string, type: string}>();

  add(message: string, type: string): void {
    this.messages.push({message, type});
  }

  clear(index: number): void {
    this.messages.splice(index, 1);
  }
}
