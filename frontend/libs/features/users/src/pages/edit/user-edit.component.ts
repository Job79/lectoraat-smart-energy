import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IUser } from '@smart-energy/core';
import { UserService } from '@smart-energy/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'smart-energy-edit',
  standalone: true,
  imports: [CommonModule, FormsModule],
  providers: [UserService],
  templateUrl: './user-edit.component.html',
})
export class UserEditComponent implements OnInit {
  user = {} as IUser;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) {
      return;
    }

    this.userService.get(id).subscribe((user) => {
      this.user = user;
    });
  }

  save() {
    if (this.user.id) {
      this.userService.update(this.user);
    } else {
      this.userService
        .create(this.user)
        .subscribe((user) => this.router.navigate(['/users', user.id]));
    }
  }

  delete() {
    if (this.user.id) {
      this.userService.delete(this.user).subscribe(() => this.router.navigate(['/users']));
    }
  }
}
