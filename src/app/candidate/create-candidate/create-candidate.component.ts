import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-candidate',
  templateUrl: './create-candidate.component.html',
})
export class CreateCandidateComponent implements OnInit {
  myForm!: any;

  jobs!: any;

  candidate: any;

  constructor(
    private fb: FormBuilder,
    private apiservice: ApiService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.myForm = this.fb.group({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      phone: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(13),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      dob: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
      experience: new FormControl('', [Validators.required]),
      skills: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
      education: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
      ]),
      achievement: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
    });
    this.findJobs();
  }

  createCandidate() {
    this.candidate = {
      name: this.myForm.value.name,
      phone: this.myForm.value.phone,
      email: this.myForm.value.email,
      dob: this.myForm.value.dob,
      gender: this.myForm.value.gender,
      experience: this.myForm.value.experience,
      skills: this.myForm.value.skills.split(','),
      education: this.myForm.value.education,
      achievement: this.myForm.value.achievement,
    };
    if (this.myForm.valid) {
      this.apiservice
        .createCandidate(this.candidate)
        .subscribe((res) => this.router.navigate(['/admin/job']));
    }
  }

  findJobs() {
    this.apiservice.getJobs().subscribe((res) => (this.jobs = res));
  }
}
