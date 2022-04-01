import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditCandidateComponent } from './edit-candidate/edit-candidate.component';
import { AppRoutingModule } from '../app-routing.module';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CandidateListComponent } from './candidate-list/candidate-list.component';
import { FormsModule } from '@angular/forms';
import { DeleteCandidateComponent } from './delete-candidate/delete-candidate.component';
import { CreateCandidateComponent } from './create-candidate/create-candidate.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from '../shared/login/login.component';
import { SharedModule } from '../shared/shared.module';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  declarations: [
    EditCandidateComponent,
    CandidateListComponent,
    DeleteCandidateComponent,
    CreateCandidateComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatSliderModule,
    MatInputModule,
    MatFormFieldModule, 
    FormsModule,
    SharedModule,
    MatSelectModule
  ]
})
export class CandidateModule { }
