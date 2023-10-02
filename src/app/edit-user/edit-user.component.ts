import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { UserIdService } from '../services/user-id.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  user: any;
  userId: string;

  constructor(
    private userIdService: UserIdService,
    private apiService: ApiService,
    private router: Router
  ) { this.userId = this.userIdService.getUserId(); }

  ngOnInit(): void {
    this.loadUser();
  }

  loadUser() {
    this.apiService.getUsersWithId().subscribe((data: any) => {
      this.user = data;
    });
  }

  voltar() {
    this.router.navigate(['/user-list']);
  }

  updateUser() {
    this.apiService.editUser(this.user.firstName, this.user.lastName, this.user.email, this.user.phone, this.user.picture, this.user.dateOfBirth, this.user.title, this.user.gender, this.user.location.street, this.user.location.city, this.user.location.state, this.user.location.country).subscribe(
      (response) => {
        console.log('Usuário atualizado com sucesso:', response);
        this.router.navigate(['/user-list']); // Redirecione de volta para a lista de usuários após a atualização
      },
      (error) => {
        console.error('Erro ao atualizar usuário:', error);
      }
    );
  }

}