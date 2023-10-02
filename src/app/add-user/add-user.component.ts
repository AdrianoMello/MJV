import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent {
  user: any = {};

  constructor(private apiService: ApiService, private router: Router) { }

  voltar() {
    this.router.navigate(['/user-list']);
  }

  newUser() {
    this.apiService.addUser(this.user.firstName, this.user.lastName, this.user.email, this.user.phone, this.user.picture, this.user.dateOfBirth, this.user.title, this.user.gender, this.user.street, this.user.city, this.user.state, this.user.country).subscribe(
      (response) => {
        console.log('Usuário adicionado com sucesso:', response);
        this.router.navigate(['/user-list']); // Redirecione de volta para a lista de usuários após a atualização
      },
      (error) => {
        console.error('Erro ao adicionar o usuário:', error);
        alert('Erro ao adicionar o usuário')
      }
    );
  }
}
