import { Component, OnInit, Input } from '@angular/core';
import { SideNavToggle } from '../../SideNavToggle.interface';
import { AxiosService } from 'src/app/axios.service';

import { Utilisateur } from 'src/app/shared/Model/Utilisateurs';
import { UtilisateurService } from 'src/app/shared/Service/Utilisateur.service';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-ajouter-compte-utilisateur',
  templateUrl: './ajouter-compte-utilisateur.component.html',
  styleUrls: ['./ajouter-compte-utilisateur.component.css']
})
export class AjouterCompteUtilisateurComponent implements OnInit {

  @Input() screenWidthh = 0;
  @Input() collapsed = false;

  isSideNavCollapsed = false;
  screenWidth = 0;
  data: string[] = [];
  
  listUtilisateur: any;
  form: boolean = false;
  Utilisateur!: Utilisateur;
  closeResult!: string;

  constructor(private axiosService: AxiosService ,private UtilisateurService: UtilisateurService, private modalService: NgbModal) {}

  ngOnInit(): void {
    this.axiosService.request(
      "GET",
      "/messages",
      null
    ).then(
      (response) => this.data = response.data
    );
    this.getAllUtilisateurs();

    this.Utilisateur = {
      id_utilisateur: null,
    nom_utilisateur: null,
    mot_de_passe: null,
    id_port: null,
  }
}

getAllUtilisateurs() {
  this.UtilisateurService.getAllUtilisateurs().subscribe(res => this.listUtilisateur = res)
}


addUtilisateur(p: any) {
  this.UtilisateurService.addUtilisateur(p).subscribe(() => {
    this.getAllUtilisateurs();
    this.form = false;
  });
}

editUtilisateur(Utilisateur: Utilisateur) {
  this.UtilisateurService.editUtilisateur(Utilisateur).subscribe();
}

deleteUtilisateur(idUtilisateur: any) {
  this.UtilisateurService.deleteUtilisateur(idUtilisateur).subscribe(() => this.getAllUtilisateurs())
}

open(content: any, action: any) {
  if (action != null)
    this.Utilisateur = action
  else
    this.Utilisateur = new Utilisateur();
  this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    this.closeResult = `Closed with: ${result}`;
  }, (reason) => {
    this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  });
}

private getDismissReason(reason: any): string {
  if (reason === ModalDismissReasons.ESC) {
    return 'by pressing ESC';
  } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
    return 'by clicking on a backdrop';
  } else {
    return `with: ${reason}`;
  }
}

cancel() {
  this.form = false;
}

  onToggleSideNav(data: SideNavToggle): void {
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }


  getBodyClass(): string {
    let styleClass = '';
    if (this.collapsed && this.screenWidthh > 768){
      styleClass='body-trimmed';
    } else if (this.collapsed && this.screenWidthh <= 768 && this.screenWidthh > 0){
      styleClass = 'body-md-screen';
    }
    return styleClass;
  }

}
