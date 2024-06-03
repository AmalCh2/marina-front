import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UtilisateurService } from 'src/app/shared/Service/Utilisateur.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  @Output() onSubmitLoginEvent = new EventEmitter();

  login:any;
  password:string ="";

  constructor(private UtilisateurService: UtilisateurService, private router: Router) { }

  ngOnInit(): void {
  }

  log_in(){
    this.UtilisateurService.verifyuserPassword(this.login, this.password)
      .subscribe(response => {
        console.log('Verification result:', response);
        if (response === 1) {
          this.router.navigate(['/menu_general']);
        } else {
          console.error('Login failed: userID or Password incorrect');
        }
      });
  }

  resetpassword(username: string){
    this.UtilisateurService.resetpwd(username).subscribe(response => {
      console.log('Verification result:', response);
    });

  }

}
