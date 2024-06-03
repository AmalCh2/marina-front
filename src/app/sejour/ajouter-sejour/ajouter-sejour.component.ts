import { Component, OnInit,Input } from '@angular/core';
import { SideNavToggle } from '../SideNavToggle.interface';
import { AxiosService } from '../../axios.service';
import { Sejour } from 'src/app/shared/Model/Sejour';
import { TypeSejour } from 'src/app/shared/Model/TypeSejour';
import { SejourService } from 'src/app/shared/Service/Sejour.service';
import { TypeSejourService } from 'src/app/shared/Service/TypeSejour.service';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Tarif } from 'src/app/shared/Model/Tarif';
import { Emplacement } from 'src/app/shared/Model/Emplacement';
import { Bateau } from 'src/app/shared/Model/Bateau';
import { TarifService } from 'src/app/shared/Service/Tarif.service';
import { EmplacementService } from 'src/app/shared/Service/Emplacement.service';
import { BateauService } from 'src/app/shared/Service/Bateau.service';
import { Client } from 'src/app/shared/Model/Client';
import { ClientService } from 'src/app/shared/Service/Client.service';

@Component({
  selector: 'app-ajouter-sejour',
  templateUrl: './ajouter-sejour.component.html',
  styleUrls: ['./ajouter-sejour.component.css']
})
export class AjouterSejourComponent implements OnInit {
  @Input() screenWidthh = 0;
  @Input() collapsed = false;

  isSideNavCollapsed = false;
  screenWidth = 0;
  data: string[] = [];

  form: boolean = false;
  closeResult!: string;

  listTarif: any;
  tarif!: Tarif;

  listTypeSejour: any;
  typeSejour!: TypeSejour;

  listSejour: any;
  sejour!: Sejour;

  listEmplacement: any;
  emplacement!: Emplacement;

  listBateau: any;
  bateau!: Bateau;

  listClient:any;
  client!: Client;
  

  constructor(private axiosService: AxiosService,
    private sejourService: SejourService,
    private tarifService: TarifService,
    private emplacementService: EmplacementService,
    private bateauService: BateauService,
    private typeSejourService: TypeSejourService,
    private modalService: NgbModal,
    private ClientService: ClientService
  ) {}

  ngOnInit(): void {
    this.axiosService.request(
      "GET",
      "/messages",
      null
    ).then(
      (response) => this.data = response.data
    );

    this.getAllSejour();
    this.sejour = {
    id_sej:  null,
    deb_sej:  null,
    fin_sej:  null,
    num_jours:  null,

    tarif:  null,
    type_sej:  null,
    emp:  null,
    bat:  null,
    };

    this.getAllTypeSejour();
    this.typeSejour = {
      id_type_sej: null,
      lib_sej: null,
      sej_majoration: null,
  };

  this.getAllEmplacement();
    this.emplacement = {
      id_emp: null,
    largeur_emp: null,
    longueur_emp: null,
    tirant_eau_emp: null,
    nbr_mouillage_emp: null,
    type_cord_emp: null,
    commentaire: null,
    rang: null,
    blockage: null,
    direction_emp: null,
    pelectrique:null,
    quai: null,
  };

  this.getAllBateau();

    this.bateau = {
      id_bat:null,
     immatriculation_bat:null,
     autre_ident_nom_bat:null,
     nom_bat:null,
     largeur_bat:null,
     longueur_bat:null,
     tirant_eau_bat:null,
     tonnage_bat:null,
     pavillon_bat:null,
     marque_bat:null,
     num_assur:null,
     nom_assur:null,
     date_exp:null,
     adresse_bat:null,
     code_postal_bat:null,
     ville_bat:null,
     pays:null,
     tel_bat:null,
     fax_bat:null,
     mobile_bat:null,
     email_bat:null,
     observation:null,
     typeBateau:null,
     client:null,
     port:null, 
     
     date_mvt:null,
     depart_mvt:null,
     arrivee_mvt:null,
     commentaire_mvt:null,
     id_emp:null,
    };

    this.getAllTarif();
    this.tarif = {
      id_tarif: null,
    annee: null,
    type_tarif: null,
    largeur_bat: null,
    longueur_bat: null,
    tarif_hivernage: null,
    tarif_annuel: null,
    jour_hs:null,
    jour_ms:null,
    jour_bs:null,
    mois_hs:null,
    mois_ms:null,
    mois_bs:null,
  };
  this.getAllClients();
  this.client = {
    id_cli: null,
  nom_cli: null,
  prenom_cli: null,
  etat_civil: null ,
  adresse_cli: null,
  ville_cli: null,
  tel_cli: null,
  fax_cli: null,
  mobile_cli: null,
  email_cli: null,
  exo_cli: null,
  pays:null,
  code_postal_cliii:null,
 
}

  }

  getAllClients() {
    this.ClientService.getAllClients().subscribe((data: Client[]) => {
      this.listClient = data;
    });
  }

  getAllTarif() {
    this.tarifService.getAllTarifs().subscribe(res => this.listTarif = res);
  }

  getAllBateau() {
    this.bateauService.getAllBateaux().subscribe(res => this.listBateau = res);
  }

  getAllEmplacement() {
    this.emplacementService.getAllEmplacements().subscribe(res => this.listEmplacement = res);
  }

  getAllTypeSejour() {
    this.typeSejourService.getAllTypeSejours().subscribe(res => this.listTypeSejour = res);
  }

  getAllSejour() {
    this.sejourService.getAllSejours().subscribe(res => this.listSejour = res);
  }

  addSejour() {
    console.log(this.sejour);
    this.sejourService.addSejour(this.sejour).subscribe(() => {
      this.getAllSejour();
      this.form = false;
    });
  }

  editSejour(sejour: Sejour) {
    this.sejourService.editSejour(sejour).subscribe();
  }

  deleteSejour(idSejour: any) {
    this.sejourService.deleteSejour(idSejour).subscribe(() => this.getAllSejour());
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
