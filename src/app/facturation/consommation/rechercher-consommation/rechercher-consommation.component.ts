import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { AxiosService } from '../../../axios.service';
import { SideNavToggle } from '../../SideNavToggle.interface';
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
  selector: 'app-rechercher-consommation',
  templateUrl: './rechercher-consommation.component.html',
  styleUrls: ['./rechercher-consommation.component.css']
})
export class RechercherConsommationComponent implements OnInit {
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
    this.axiosService.request('GET', '/messages', null).then(
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
    etat_fact: null,
    etat_paiement: null,
    montant_ttl: null,
    exo_cli: null,
    lib_exo: null,
    tbre_fiscale: null,
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

  addConsommation(c: any) {
    this.consommationService.addConsommation(c).subscribe(() => {
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






  open(content: any, action: any) {
    if (action != null)
      this.consommation = action
    else
      this.consommation = new Consommation();
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








  onToggleSideNav(data: SideNavToggle): void {
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }

  getBodyClass(): string {
    if (this.collapsed && this.screenWidthh > 768) {
      return 'body-trimmed';
    } else if (this.collapsed && this.screenWidthh <= 768 && this.screenWidthh > 0) {
      return 'body-md-screen';
    }
    return '';
  }

 
}