import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service'


@Component({
  selector: 'app-delete-job',
  templateUrl: './delete-job.component.html'
})
export class DeleteJobComponent implements OnInit {

  constructor(
    private apiService: ApiService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  deleteJob(){
    this.apiService.deleteJob(localStorage.getItem("jobId")!).subscribe(res => console.log(res))
    localStorage.removeItem("jobId");
    window.location.reload();
  }
}
