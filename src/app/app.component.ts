import { Component } from '@angular/core';
import { User } from './user';
// import { UserDetailsComponent } from './user-details/user-details.component';

@Component({
  selector: 'app-root',
  // standalone: true,
  // imports: [UserDetailsComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gdg-project-angular16';
  users: User[] = [
    {
      id: 'a2bf',
      name: 'RaKNj',
      sex: 'M'
    },
    {
      id: 'a2aa',
      name: 'AliK',
      sex: 'M'
    },
    {
      id: 'a19f',
      name: 'Ell@d',
      sex: 'F'
    }
  ]

  currenttUser: User = this.users[1];
}
