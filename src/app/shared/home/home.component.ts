import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  constructor(
    private apiService: ApiService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.jobList();
  }

  jobList() {
    this.router.navigate(['admin/job'], { relativeTo: this.route });
  }

  candidateList() {
    this.router.navigate(['admin/candidate'], { relativeTo: this.route });
  }

  clear(){
    localStorage.clear();
  }

  applyJob(){
    this.router.navigate(['admin/apply'], { relativeTo: this.route })
  }
}
