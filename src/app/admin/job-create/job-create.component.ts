import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-job-create',
  templateUrl: './job-create.component.html',
})
export class JobCreateComponent implements OnInit {
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
      jobName: new FormControl('', [Validators.required, Validators.minLength(4)]),
      role: new FormControl('', [Validators.required, Validators.minLength(4)]),
      description: new FormControl('', [Validators.required, Validators.minLength(15)]),
      skills: new FormControl('', [Validators.required, Validators.minLength(4)]),
      experience: new FormControl('', [Validators.required, Validators.minLength(4)]),
    });
  }

  create() {

    if(this.myForm.valid){
      this.jobList = {
        jobName: this.myForm.value.jobName,
        role: this.myForm.value.role,
        description: this.myForm.value.description,
        skills: this.myForm.value.skills.split(','),
        experience: this.myForm.value.experience,
      };
      this.apiservice
        .createJob(this.jobList)
        .subscribe((res) => this.router.navigate(['/home']));
    }

  }
}
