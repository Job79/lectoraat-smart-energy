import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { RouterModule } from '@angular/router';
import { IUser } from '@smart-energy/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'smart-energy-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  providers: [UserService],
  templateUrl: './user-list.component.html',
})
export class UserListComponent implements OnInit {
  users$!: Observable<IUser[]>;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.users$ = this.userService.list();
  }
}
