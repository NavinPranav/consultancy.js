import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminJobListComponent } from './admin/admin-job-list/admin-job-list.component';
import { AdminModule } from './admin/admin.module';
import { DeleteJobComponent } from './admin/delete-job/delete-job.component';
import { EditJobComponent } from './admin/edit-job/edit-job.component';
import { JobApplyComponent } from './admin/job-apply/job-apply.component';
import { JobCreateComponent } from './admin/job-create/job-create.component';
import { CandidateListComponent } from './candidate/candidate-list/candidate-list.component';
import { CreateCandidateComponent } from './candidate/create-candidate/create-candidate.component';
import { DeleteCandidateComponent } from './candidate/delete-candidate/delete-candidate.component';
import { EditCandidateComponent } from './candidate/edit-candidate/edit-candidate.component';
import { ProfileComponent } from './candidate/profile/profile.component';
import { HomeComponent } from './shared/home/home.component';
import { JobListComponent } from './shared/job-list/job-list.component';
import { LoginComponent } from './shared/login/login.component';

const routes: Routes = [
  { path: '', component: JobListComponent },
  { path: 'login/admin', component: LoginComponent },
  { path: 'login/user', component: LoginComponent },
  { path: 'profile', component: ProfileComponent},
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: 'admin/job',
        component: AdminJobListComponent,
        children: [{ path: 'delete', component: DeleteJobComponent }],
      },
      {
        path: 'admin/candidate',
        component: CandidateListComponent,
        children: [{ path: 'delete', component: DeleteCandidateComponent }],
      },
      {
        path: 'admin/apply',
        component: JobApplyComponent
      }
    ],
  },
  { path: 'job/edit', component: EditJobComponent },
  { path: 'candidate/edit', component: EditCandidateComponent },
  { path: 'candidate/create', component: CreateCandidateComponent },
  { path: 'job/create', component: JobCreateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
