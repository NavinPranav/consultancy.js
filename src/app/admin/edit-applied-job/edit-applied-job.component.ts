import { Component, Inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { JobApplyComponent } from '../job-apply/job-apply.component';

@Component({
  selector: 'app-edit-applied-job',
  templateUrl: './edit-applied-job.component.html',
})
export class EditAppliedJobComponent implements OnInit {
  myForm!: any;
  candidates!: any;
  jobs!: any;
  details!: any;

  constructor(
    private fb: FormBuilder,
    private apiservice: ApiService,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<JobApplyComponent>
  ) {}

  ngOnInit(): void {
    console.log(this.data);
    this.myForm = this.fb.group({
      jobId: new FormControl('', [Validators.required]),
      candidId: new FormControl('', [Validators.required]),
      status: new FormControl('', [Validators.required]),
    });
    setTimeout(() => {
      this.myForm = this.fb.group({
        jobId: new FormControl(this.data.editData.jobId, [Validators.required]),
        candidId: new FormControl(this.data.editData.candidId, [
          Validators.required,
        ]),
        status: new FormControl(this.data.editData.status, [
          Validators.required,
        ]),
      });
    }, 400);
    this.getCandidates();
    this.getJobs();
  }

  getCandidates() {
    this.apiservice.getCandidates().subscribe((res: any) => {
      this.candidates = res;
    });
  }
  getJobs() {
    this.apiservice.getJobs().subscribe((res) => (this.jobs = res));
  }
  applyCandidateJob(){
    this.apiservice.editCandidJobId(this.myForm.value).subscribe((res) => console.log(res));
  }
  close(){
    this.dialogRef.close();
  }
}
