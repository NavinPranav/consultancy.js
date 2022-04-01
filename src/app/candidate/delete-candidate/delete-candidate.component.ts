import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-delete-candidate',
  templateUrl: './delete-candidate.component.html'
})
export class DeleteCandidateComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }

  deleteCandidate(){
    this.apiService.deleteCandidate(localStorage.getItem("userId")!).subscribe(res => console.log(res))
  }

}
