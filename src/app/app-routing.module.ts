import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { ShowUserComponent } from './show-user/show-user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';

const routes: Routes = [
  { path: 'user-list', component: UserListComponent },
  { path: 'show-user', component: ShowUserComponent },
  { path: 'add-user', component: AddUserComponent },
  { path: 'edit-user', component: EditUserComponent },
  { path: '', redirectTo: '/user-list', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
