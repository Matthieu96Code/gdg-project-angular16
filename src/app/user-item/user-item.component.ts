import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent {
  @Input({ required: true }) user!: User;
  
  @Output() details = new EventEmitter<string>();

  onDetails () {
    console.log('details', this.user.id);
    this.details.emit(this.user.id);
  }
  onDelete () {
    console.log('delete', this.user.id);
  }
  onEdit () {
    console.log('edit', this.user.id);
  }
}
