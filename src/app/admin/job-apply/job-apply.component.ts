import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { EditAppliedJobComponent } from '../edit-applied-job/edit-applied-job.component';


@Component({
  selector: 'app-job-apply',
  templateUrl: './job-apply.component.html',
})
export class JobApplyComponent implements OnInit {
  candidates!: any;
  jobs!: any;
  myForm!: any;
  details!:any;

  constructor(
    private fb: FormBuilder,
    private apiservice: ApiService,
    private router: Router,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.myForm = this.fb.group({
      jobId: new FormControl('', [Validators.required]),
      candidId: new FormControl('', [Validators.required]),
      status: new FormControl('', [Validators.required]),
    });
    this.getCandidates();
    this.getJobs();
    this.getAll();
  }

  getCandidateJob(email: any) {
    this.apiservice.getCandidateJob(email).subscribe((res) => console.log(res));
  }

  getAll(){
    this.apiservice.getAll().subscribe(res => this.details = res);
  }

  getCandidates() {
    this.apiservice.getCandidates().subscribe((res: any) => {
      (this.candidates = res), console.log(res);
    });
  }
  getJobs() {
    this.apiservice.getJobs().subscribe((res) => (this.jobs = res));
  }
  save() {
    console.log(this.myForm.value);
    if (this.myForm.valid) {
      this.apiservice
        .applyCandidateJob(this.myForm.value)
        .subscribe((res) => console.log(res));
    }
  }

  jobApply(){
    return localStorage.getItem("jobApply")
  }
  apply(){
    
    localStorage.setItem("jobApply","true")
  }
  clear(){
    localStorage.removeItem("jobApply");
    window.location.reload();
  }

  // setId(jobId:any): void {
  //   localStorage.setItem('jobCandidId', jobId)   
  // }

  applyCandid(data:any){
    const dialogRef = this.dialog.open(EditAppliedJobComponent, {
      width: '550px',
      data: { editData: data },
    });
}
}
