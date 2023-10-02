import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
import { UserIdService } from '../services/user-id.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})

export class UserListComponent implements OnInit {
  users: any[] = [];
  currentPage: number = 0;

  constructor(private apiService: ApiService, private router: Router, private userIdService: UserIdService) { }

  loadUsers() {
    this.apiService.getUsers(this.currentPage).subscribe((data: any) => {
      this.users = data.data;
      console.log(data.data)
    });
  }

  nextPage() {
    // Avança para a próxima página
    this.currentPage++;
    this.loadUsers();
  }

  prevPage() {
    // Retrocede para a página anterior
    if (this.currentPage > 0) {
      this.currentPage--;
      this.loadUsers();
    }
  }

  ngOnInit(): void {
    this.loadUsers();
  }

  showUser(userId: string) {
    this.router.navigate(['/show-user']);
    this.userIdService.setUserId(userId);
  }

  addUser() {
    this.router.navigate(['/add-user']);
  }

  deleteUser(userId: string) {
    this.apiService.deleteUser(userId).subscribe(
      (response) => {
        console.log('Usuário excluído com sucesso:', response);
        location.reload();
      },
      (error) => {
        console.error('Erro ao excluir usuário:', error);
      }
    );
  }

  editUser(userId: string) {
    this.router.navigate(['/edit-user']);
    this.userIdService.setUserId(userId);
  }
}
