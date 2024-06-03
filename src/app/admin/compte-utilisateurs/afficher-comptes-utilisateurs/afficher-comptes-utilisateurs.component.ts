import { Component, OnInit, Input } from '@angular/core';
import { AxiosService } from 'src/app/axios.service';
import { SideNavToggle } from '../../SideNavToggle.interface';
import { ElementRef, ViewChild } from '@angular/core';
import { Utilisateur } from 'src/app/shared/Model/Utilisateurs';
import { UtilisateurService } from 'src/app/shared/Service/Utilisateur.service';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { Port } from 'src/app/shared/Model/Port';
import { PortService } from 'src/app/shared/Service/Port.service';
import { Role } from 'src/app/shared/Model/Role';
import { RoleService } from 'src/app/shared/Service/Role.service';

@Component({
  selector: 'app-afficher-comptes-utilisateurs',
  templateUrl: './afficher-comptes-utilisateurs.component.html',
  styleUrls: ['./afficher-comptes-utilisateurs.component.css']
})
export class AfficherComptesUtilisateursComponent implements OnInit {

  @Input() screenWidthh = 0;
  @Input() collapsed = false;

  isSideNavCollapsed = false;
  screenWidth = 0;
  data: string[] = [];

  listUtilisateurs: any;
  form: boolean = false;
  Utilisateur!: Utilisateur;
  closeResult!: string;

  listPorts: any;
  port!: Port;

  listRoles: any;
  role!: Role;

  constructor(private axiosService: AxiosService,private UtilisateurService: UtilisateurService, private modalService: NgbModal,
    private PortService: PortService,
    private RoleService: RoleService
  ) {}

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

    this.role = {
      id_role: null,
      lib_role: null,
  };

this.getAllRoles();
}

getAllUtilisateurs() {
  this.UtilisateurService.getAllUtilisateurs().subscribe(res => this.listUtilisateurs = res)
}

getAllPorts() {
  this.PortService.getAllPorts().subscribe(res => this.listPorts = res)
}

getAllRoles() {
  this.RoleService.getAllRoles().subscribe((data: Role[]) => {
    this.listRoles = data;
  });
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