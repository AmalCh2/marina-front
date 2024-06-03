import { Component, OnInit, Input } from '@angular/core';
import { SideNavToggle } from '../../SideNavToggle.interface';
import { AxiosService } from 'src/app/axios.service';

import { Utilisateur } from 'src/app/shared/Model/Utilisateurs';
import { UtilisateurService } from 'src/app/shared/Service/Utilisateur.service';
import { Role } from 'src/app/shared/Model/Role';
import { RoleService } from 'src/app/shared/Service/Role.service';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { Port } from 'src/app/shared/Model/Port';
import { PortService } from 'src/app/shared/Service/Port.service';

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

  listRoles: Role[] = [
    {id_role: 1, lib_role: "admin"}
  ];
  role!: Role;

  listPorts: Port[] = [];
  port!: Port;

  constructor(private axiosService: AxiosService ,private UtilisateurService: UtilisateurService, private modalService: NgbModal, private roleService: RoleService,private PortService: PortService) {}

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
    port: null,
    role : null
  };


  this.getAllPorts();

    this.port = {
      id_port: null,
      nom_port: null,
      adr1_port: null,
      adr2_port: null,
      adr3_port: null,
      tel_port: null,
      fax_port: null,
      email_port: null,
      sigle_port: null,
  };

this.getAllRoles();
}

getAllUtilisateurs() {
  this.UtilisateurService.getAllUtilisateurs().subscribe(res => this.listUtilisateur = res)
}

getAllPorts() {
  this.PortService.getAllPorts().subscribe(res => this.listPorts = res)
}

getAllRoles() {
  this.roleService.getAllRoles().subscribe((data: Role[]) => {
    this.listRoles = data;
  });
}

addRoleAndUtilisateur() {
  /*this.roleService.addRole(this.role).subscribe(() => {
    this.getAllRoles();
  });*/
  console.log(this.Utilisateur);
  this.UtilisateurService.addUtilisateur(this.Utilisateur).subscribe(() => {
    this.getAllUtilisateurs();
  });
}

editRoleAndUtilisateur() {
  this.roleService.editRole(this.role).subscribe(() => {
    this.getAllRoles();
  });
  this.UtilisateurService.editUtilisateur(this.Utilisateur).subscribe(() => {
    this.getAllUtilisateurs();
  });
}

deleteRoleAndUtilisateur(idRole: any, idUtilisateur: any) {
  this.roleService.deleteRole(idRole).subscribe(() => {
    this.getAllRoles();
  });
  this.UtilisateurService.deleteUtilisateur(idUtilisateur).subscribe(() => {
    this.getAllUtilisateurs();
  });
}

open(content: any, action: {role: Role, utilisateur: Utilisateur} | null) {
  if (action != null) {
    this.role = action.role;
    this.Utilisateur = action.utilisateur;
  } else {
    this.role = new Role();
    this.Utilisateur = new Utilisateur();
  }

  this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
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
