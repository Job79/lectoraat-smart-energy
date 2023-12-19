import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '@lectoraat-smart-energy/shared';
import { Observable } from 'rxjs';
import { UserService } from '../user.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'lectoraat-smart-energy-user-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  providers: [UserService],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
})
export class UserListComponent implements OnInit {
  users$!: Observable<User[]>;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.users$ = this.userService.getUsers();
    this.users$.subscribe((users) => {
      console.log(users);
    });
  }
}
