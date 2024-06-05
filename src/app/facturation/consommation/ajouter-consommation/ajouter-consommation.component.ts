import { Component, OnInit, Input } from '@angular/core';
import { SideNavToggle } from '../../SideNavToggle.interface';
import { AxiosService } from 'src/app/axios.service';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Consommation } from 'src/app/shared/Model/Consommation';
import { ConsommationService } from 'src/app/shared/Service/Consommation.service';
import { FactureService } from 'src/app/shared/Service/Facture.service';
import { SejourService } from 'src/app/shared/Service/Sejour.service';
import { PrestationService } from 'src/app/shared/Service/Prestation.service';
import { Facture } from 'src/app/shared/Model/Facture';
import { Prestation } from 'src/app/shared/Model/Prestation';
import { Sejour } from 'src/app/shared/Model/Sejour'; // Import the correct type


@Component({
  selector: 'app-ajouter-consommation',
  templateUrl: './ajouter-consommation.component.html',
  styleUrls: ['./ajouter-consommation.component.css']
})
export class AjouterConsommationComponent implements OnInit {
  @Input() screenWidthh = 0;
  @Input() collapsed = false;

  isSideNavCollapsed = false;
  screenWidth = 0;
  data: string[] = [];

  listConsommation: any;
  form: boolean = false;
  consommation!: Consommation;
  closeResult!: string;

  listFacture: any;
  facture!: Facture;

  listSejour: any;
  sejour!: Sejour;

  listPrestation: any;
  prestation!: Prestation;

  constructor(private axiosService: AxiosService,
    private consommationService: ConsommationService, 
    private modalService: NgbModal, 
    private FactureService: FactureService,
    private SejourService: SejourService,
    private PrestationService: PrestationService) {
  }


  ngOnInit(): void {
    this.axiosService.request(
      "GET",
      "/messages",
      null
    ).then(
      (response) => this.data = response.data
    );
    this.getAllConsommation();

    this.consommation = {
      id_cons: null,
    prix_unit: null,
    qte: null,
    deb_cons: null,
    fin_cons: null,
    date_sys: null,
    offre: null,
    fact: null,
    prest: null,
    sej: null,
  }

  this.getAllFactures();

  this.facture = {
    id_fact: null,
    date_fact: null,
    etat_paiement: null,
    montant_ttl: null,
    exo_cli: null,
    lib_exo: null,
    tbre_fiscale: null,
    lib_carte: null,
    cpt_carte: null,
}

this.getAllPrestations();

    this.prestation = {
      id_prest: null,
    lib_prest: null,
    prix_unit_prest: null,
    secteur_prest: null,
    rang_prest: null,
    tva: null,
    type_prest: null,
    nature:null,
  }


  this.getAllSejours();

    this.sejour = {
      id_sej:null,
      deb_sej:null,
      fin_sej:null,
      num_jours:null,
  
      tarif:null,
      type_sej:null,
      emp:null,
      bat:null,
  }


  }
  getAllFactures() {
    this.FactureService.getAllFactures().subscribe(res => this.listFacture = res);
  }
  getAllPrestations() {
    this.PrestationService.getAllPrestations().subscribe(res => this.listPrestation = res)
  }

  getAllSejours() {
    this.SejourService.getAllSejours().subscribe(res => this.listSejour = res)
  }
  
  getAllConsommation() {
    this.consommationService.getAllConsommations().subscribe(res => this.listConsommation = res);
  }

  addConsommation() {
    console.log(this.consommation);
    this.consommationService.addConsommation(this.consommation).subscribe(() => {
      this.getAllConsommation();
      this.form = false;
    });
  }

  editConsommation(consommation: Consommation) {
    this.consommationService.editConsommation(consommation).subscribe();
  }

  deleteConsommation(idConsommation: any) {
    this.consommationService.deleteConsommation(idConsommation).subscribe(() => this.getAllConsommation());
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