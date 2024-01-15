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
      const generatePassword = (
        length = 20,
        characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz~!@-#$',
      ) =>
        Array.from(crypto.getRandomValues(new Uint32Array(length)))
          .map((x) => characters[x % characters.length])
          .join('');

      this.user.password = generatePassword();
      this.user.passwordConfirm = this.user.password;
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
      const subject = encodeURIComponent('Smart Energy - Account gegevens');
      const body = encodeURIComponent(
        `Email: ${this.user.email}\nPassword: ${this.user.password}\n https://energiecoach1.sendlab.nl/passwordreset?email=${this.user.email}`,
      );

      this.userService.create(this.user).subscribe(() => {
        this.router.navigate(['/users']);
        window.location.href = `mailto:${this.user.email}?subject=${subject}&body=${body}`;
      });
    }
  }

  delete() {
    if (this.user.id) {
      this.userService.delete(this.user).subscribe(() => this.router.navigate(['/users']));
    }
  }
}
