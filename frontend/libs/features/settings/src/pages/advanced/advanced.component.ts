import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService, IUser, UserService, environment } from '@smart-energy/core';
import { Router } from '@angular/router';

@Component({
  selector: 'smart-energy-advanced',
  standalone: true,
  imports: [CommonModule, FormsModule],
  providers: [UserService],
  templateUrl: './advanced.component.html',
})
export class AdvancedComponent implements OnInit {
  version!: string;

  user = {} as IUser;

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private router: Router,
  ) {}
  ngOnInit() {
    this.version = environment.version;
    const id = this.authService.user$.value.data?.id;

    this.userService.get(id!).subscribe((user) => {
      this.user = user;
    });
  }

  async logout() {
    await this.authService.logout();
    await this.router.navigate(['/']);
  }

  async delete() {
    await this.userService.delete(this.user);
    await this.logout();
  }
}
