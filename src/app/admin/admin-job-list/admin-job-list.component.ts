import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service'
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { EditJobComponent } from '../edit-job/edit-job.component';




@Component({
  selector: 'app-admin-job-list',
  templateUrl: './admin-job-list.component.html',
})
export class AdminJobListComponent implements OnInit {

  jobs! : any;

  constructor(
    private apiService: ApiService,
    private router: Router, private route: ActivatedRoute,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.apiService.getJobs().subscribe(res => this.jobs = res);
  }

  applyCandid(data:any){
    
      const dialogRef = this.dialog.open(EditJobComponent, {
        width: '550px',
        data: { editData: data },
      });
  }

  save(event: Event): void {
    var jobId = (<HTMLButtonElement>event.target).id;
    localStorage.setItem('jobId', jobId);
   
  }

  deleteConfirm(){
    this.router.navigate(['delete'], { relativeTo: this.route })
  }

}
