import { Component, OnInit } from '@angular/core';
import { UserIdService } from '../services/user-id.service';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-user',
  templateUrl: './show-user.component.html',
  styleUrls: ['./show-user.component.scss']
})
export class ShowUserComponent implements OnInit {
  userId: string = '';
  user: any = null;
  dataFormatada: string = '';

  constructor(private userIdService: UserIdService, private apiService: ApiService, private router: Router) { 
    this.userId = this.userIdService.getUserId();
  } 

  voltar() {
    this.router.navigate(['/user-list']);
  }

  ngOnInit(): void {
    this.apiService.getUsersWithId().subscribe((data: any) => {
      this.user = data;

      // Extrair e formatar a data de aniversario
      if (this.user && this.user.dateOfBirth) {
        const dataISO8601 = this.user.dateOfBirth;
        const data = new Date(dataISO8601);
        const dia = data.getDate().toString().padStart(2, '0');
        const mes = (data.getMonth() + 1).toString().padStart(2, '0');
        const ano = data.getFullYear();
        this.dataFormatada = `${dia}/${mes}/${ano}`;
      }
    });
  }
}
