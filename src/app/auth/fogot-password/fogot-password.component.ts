import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/shared/services/auth.service';

@Component({
  selector: 'app-fogot-password',
  templateUrl: './fogot-password.component.html',
  styleUrls: ['./fogot-password.component.css']
})
export class FogotPasswordComponent implements OnInit{

  loading: boolean = false;
  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }
  reset(){

  }

}
