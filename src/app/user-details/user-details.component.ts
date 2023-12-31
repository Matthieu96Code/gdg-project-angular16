import { Component, Input } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-user-details',
  // standalone: true,
  // imports: [],
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {
  @Input() user: User | null = null;

}
