import { Component, OnInit, Input } from '@angular/core';
import { SideNavToggle } from './SideNavToggle.interface';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-menu-general',
  templateUrl: './menu-general.component.html',
  styleUrls: ['./menu-general.component.css']
})
export class MenuGeneralComponent implements OnInit {




  @Input() screenWidthh= 0;
  @Input() collapsed= false;
  getBodyClass():string{
    let styleClass = '';
    if (this.collapsed && this.screenWidthh > 768){
      styleClass='body-trimmed';
    } else if (this.collapsed && this.screenWidthh <= 768 && this.screenWidthh > 0){
      styleClass = 'body-md-screen'
    }
    return styleClass;
  }







  isSideNavCollapsed = false;
  screenWidth = 0;
  data: string[] = [];

  users: string[] = ['User1', 'User2', 'User3']; // Remplacez par votre liste d'utilisateurs
  selectedRecipient: string;
  messageContent: string;

  constructor() {
    this.selectedRecipient = this.users[0]; // Sélectionner le premier utilisateur par défaut
    this.messageContent = '';
  }

  sendMessage(event: Event) {
    event.preventDefault(); // Prévenir le rechargement de la page
    if (this.selectedRecipient && this.messageContent) {
      // Logique d'envoi de message
      console.log('Message envoyé à ${this.selectedRecipient}: ${this.messageContent}');
      alert('Message envoyé à ${this.selectedRecipient}');
      // Réinitialiser le formulaire
      this.selectedRecipient = this.users[0];
      this.messageContent = '';
    } else {
      alert('Veuillez sélectionner un destinataire et écrire un message.');
    }
  }

  ngOnInit(): void {
    
  }

  onToggleSideNav(data: SideNavToggle): void {
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }
}





  

  