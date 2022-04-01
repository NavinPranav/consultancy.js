import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminJobListComponent } from './admin-job-list/admin-job-list.component';
import { AppRoutingModule } from '../app-routing.module';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { EditJobComponent } from './edit-job/edit-job.component';
import { DeleteJobComponent } from './delete-job/delete-job.component';
import { JobCreateComponent } from './job-create/job-create.component';

@NgModule({
  declarations: [
    AdminJobListComponent,
    EditJobComponent,
    DeleteJobComponent,
    JobCreateComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatSliderModule,
    MatInputModule,
    MatFormFieldModule,
  ],
})
export class AdminModule {}
