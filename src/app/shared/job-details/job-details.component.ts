import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service'
import { Router, ActivatedRoute } from '@angular/router';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { JobListComponent } from '../job-list/job-list.component';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html'
})
export class JobDetailsComponent implements OnInit {

  // job!:any;

  job: any = this.data;

  constructor(
    private apiService: ApiService,
    private router: Router, private route: ActivatedRoute,
    public dialogRef: MatDialogRef<JobListComponent>,
    public dialogue: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    this.apiService.getJobs().subscribe(res => {this.job = res, console.log(res)})
  }
}
