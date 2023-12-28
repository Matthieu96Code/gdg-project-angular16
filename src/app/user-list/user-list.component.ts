import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  @Input() users: User[] = [];
  @Output() showDetails = new EventEmitter<string>();

  currentUser!: User;

  onDetails(userId: string) {
    console.log('Parent', userId);
    this.showDetails.emit(userId);
  }
}
