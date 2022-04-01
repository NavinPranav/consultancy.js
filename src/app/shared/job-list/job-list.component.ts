import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { JobDetailsComponent } from '../job-details/job-details.component';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
})
export class JobListComponent implements OnInit {
  jobs!: any;

  constructor(
    private apiService: ApiService,
    private router: Router,
    private route: ActivatedRoute,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.apiService.getJobs().subscribe((res) => {
      (this.jobs = res), console.log(res);
    });
  }

  view(data: any) {
    const dialogRef = this.dialog.open(JobDetailsComponent, {
      width: '550px',
      data: { viewData: data },
    });
  }

  checkUser() {
    return localStorage.getItem('candidUser');
  }

  removeUser() {
    localStorage.clear();
  }
}
