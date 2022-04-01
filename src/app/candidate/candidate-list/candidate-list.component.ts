import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-candidate-list',
  templateUrl: './candidate-list.component.html'
})
export class CandidateListComponent implements OnInit {

  candidates:any;

  constructor(private apiService: ApiService, private router: Router, private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.getCandidates()
  }

  getCandidates(){
    this.apiService.getCandidates().subscribe((res:any) =>  {this.candidates = res, console.log(res)});
  }

  save(event: Event): void {
    var userId = (<HTMLButtonElement>event.target).id;
    localStorage.setItem('userId', userId);
    // this.router.navigate(["candidate/edit"])
  }

  deleteConfirm(){
    this.router.navigate(['delete'], { relativeTo: this.route })
  }

}
