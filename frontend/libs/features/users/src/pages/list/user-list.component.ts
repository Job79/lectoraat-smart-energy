import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IUser, PageHeaderComponent, SearchComponent } from '@smart-energy/core';
import { UserService } from '@smart-energy/core';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@Component({
  selector: 'smart-energy-list',
  standalone: true,
  imports: [CommonModule, RouterModule, InfiniteScrollModule, PageHeaderComponent, SearchComponent],
  providers: [UserService],
  templateUrl: './user-list.component.html',
})
export class UserListComponent implements OnInit {
  appComponentDiv = document.querySelector('.app-component');
  users: IUser[] = [];
  searchQuery = '';
  page = 1;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers(reset = false) {
    if (reset) {
      this.page = 1;
    }

    this.userService
      .list({
        query: this.searchQuery,
        page: this.page++,
      })
      .subscribe((users) => (this.users = reset ? users : [...this.users, ...users]));
  }
}
