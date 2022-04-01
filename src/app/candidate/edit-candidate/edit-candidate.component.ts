import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-candidate',
  templateUrl: './edit-candidate.component.html'
})
export class EditCandidateComponent implements OnInit {

  myForm!:FormGroup;

  candidate:any;

  jobs!:any;

  constructor(private fb: FormBuilder,private apiservice: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      name: new FormControl(),
      phone: new FormControl(),
      email: new FormControl(),
      dob: new FormControl(),
      gender: new FormControl(),
      experience: new FormControl(),
      skills: new FormControl(),
      education: new FormControl(),
      achievement: new FormControl(),
      apply: new FormControl(),
      jobStatus: new FormControl(),

      status: new FormControl(),

    });
    this.findCandidate();

    this.findJobs();
    setTimeout(() => {
      this.myForm = this.fb.group({
        name: new FormControl(this.candidate.data.name, [Validators.required, Validators.minLength(3)]),
        phone: new FormControl(this.candidate.data.phone, [Validators.required, Validators.minLength(10), Validators.maxLength(13)]),
        email: new FormControl(this.candidate.data.email, [Validators.email]),
        dob: new FormControl(this.candidate.data.dob, [Validators.required]),
        gender: new FormControl(this.candidate.data.gender, [Validators.required]),
        experience: new FormControl(this.candidate.data.experience, [Validators.required]),
        skills: new FormControl(this.candidate.data.skills, [Validators.required,Validators.minLength(3)]),
        education: new FormControl(this.candidate.data.education, [Validators.required, Validators.minLength(3)]),
        achievement: new FormControl(this.candidate.data.achievement, [Validators.required, Validators.minLength(3)]),
        apply: new FormControl(this.candidate.data.apply, [Validators.required]),
        jobStatus: new FormControl(this.candidate.data.jobStatus, [Validators.required]),
        status: new FormControl(this.candidate.data.status),
  
      })

    })
  }

  findCandidate(){
    this.apiservice.findCandidate(localStorage.getItem("userId")!).subscribe(res => {console.log(res), this.candidate = res});
  }

  editCandidate(){
    if(this.myForm.valid){
      this.apiservice.editCandidate(localStorage.getItem("userId")!, this.myForm.value).subscribe(res => {console.log(res), this.router.navigate(['admin/candidate'])})
    }
  }

  findJobs(){
    this.apiservice.getJobs().subscribe(res => this.jobs = res)
  }

}
