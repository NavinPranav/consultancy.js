import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
})
export class ProfileComponent implements OnInit {
  profile!: any;

  constructor(private apiservice: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.apiservice
      .userLogin({ email: localStorage.getItem('candidEmail')! })
      .subscribe((res) => (this.profile = res));
  }
}
