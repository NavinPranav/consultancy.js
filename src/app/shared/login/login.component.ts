import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Route, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  myForm!: FormGroup;

  candidate!: any;

  constructor(
    private apiService: ApiService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.myForm = this.fb.group({
      username: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }
  checkAdmin(): any {
    if (this.router.url === '/login/admin') {
      return true;
    }
  }

  login() {
    console.log(this.myForm.value);
    if (this.router.url === '/login/admin') {
      this.apiService.adminLogin(this.myForm.value).subscribe(
        (res) => {
          this.router.navigate(['home']), console.log(res);
        },
        (err) => alert('username or password is incorrect')
      );
    } else {
      this.apiService.userLogin(this.myForm.value).subscribe(
        (res) => {
          this.router.navigate(['']),
            localStorage.setItem('candidUser', 'true'),
            localStorage.setItem('candidEmail', res.data.email);
        },
        (err) => alert('user not found contact admin')
      );
    }
  }
}
