import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

   //login

    public adminLogin(data: any): Observable<any>{
      return this.http.post<any>('http://localhost:8080/login', data);
    }

    public userLogin(data:any): Observable<any>{
      return this.http.post<any> ('http://localhost:8080/user/login' , data)
    }



    //jobs

    public getJobs():Observable<any>{
      return this.http.get<any>('http://localhost:8080/job/all');
    }

    public getJob(id: string): Observable<any>{
      return this.http.get<any>('http://localhost:8080/job/' + id);
    }

    public editJob(id: string, data: any): Observable<any>{
      return this.http.put<any>("http://localhost:8080/job/edit/" + id, data)
    }

    public deleteJob(id: string): Observable<any>{
      return this.http.delete<any>("http://localhost:8080/job/delete/" + id)
    }

    public createJob(data: any): Observable<any>{
      return this.http.post<any>('http://localhost:8080/job/create', data)
    }




    //candidates

    public getCandidates(): Observable<any>{
      return this.http.get<any>("http://localhost:8080/user/all");
    }

    public editCandidate(id: string, data: any): Observable<any>{
      return this.http.put<any>("http://localhost:8080/user/edit/" + id, data);
    }

    public findCandidate(id: String): Observable<any>{
      return this.http.get<any>("http://localhost:8080/user/" + id);
    }

    public deleteCandidate(id: string): Observable<any>{
      return this.http.delete<any>('http://localhost:8080/user/delete/' + id);
    }

    public createCandidate(data: any): Observable<any>{
      return this.http.post<any>('http://localhost:8080/user/create', data)
    }

}
