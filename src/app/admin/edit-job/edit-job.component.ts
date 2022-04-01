import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-job',
  templateUrl: './edit-job.component.html',
})
export class EditJobComponent implements OnInit {
  myForm!: FormGroup;

  jobList: any;

  constructor(
    private fb: FormBuilder,
    private apiservice: ApiService,
    private router: Router
  ) {}

  job!: any;

  ngOnInit(): void {
    this.myForm = this.fb.group({
      jobName: new FormControl(),
      role: new FormControl(),
      description: new FormControl(),
      skills: new FormControl(),
      experience: new FormControl(),
      // apply: new FormControl(),
    });
    this.findJob();
    setTimeout(() => {
      this.myForm = this.fb.group({
        jobName: new FormControl(this.job.data.jobName, [Validators.required, Validators.minLength(4)]),
        role: new FormControl(this.job.data.role, [Validators.required, Validators.minLength(4)]),
        description: new FormControl(this.job.data.description, [Validators.required, Validators.minLength(15)]),
        skills: new FormControl(this.job.data.skills,[Validators.required, Validators.minLength(4)]),
        experience: new FormControl(this.job.data.experience,[Validators.required, Validators.minLength(4)]),
      });
    }, 400);
  }

  findJob() {
    this.apiservice.getJob(localStorage.getItem('jobId')!).subscribe(
      (res) => (this.job = res),
      (err) => console.log(err)
    );
  }

  save() {
    if(this.myForm.valid){
      this.jobList = {
        jobName: this.myForm.value.jobName,
        role: this.myForm.value.role,
        description: this.myForm.value.description,
        skills: this.myForm.value.skills.split(","),
        experience: this.myForm.value.experience,
      };
      this.apiservice
        .editJob(localStorage.getItem('jobId')!, this.jobList)
        .subscribe((res) => {console.log(res),window.location.reload()});
      localStorage.removeItem('jobId');
    }

    
  }
}
