import { Component, OnInit, Input } from '@angular/core';
import { AxiosService } from 'src/app/axios.service';
import { SideNavToggle } from '../../SideNavToggle.interface';
import { ElementRef, ViewChild } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Facture } from 'src/app/shared/Model/Facture';
import { FactureService } from 'src/app/shared/Service/Facture.service';
import { Reglement } from 'src/app/shared/Model/Reglement';
import { ReglementService } from 'src/app/shared/Service/Reglement.service';
import { Carte } from 'src/app/shared/Model/Carte';
import { CarteService } from 'src/app/shared/Service/Carte.service';


@Component({
  selector: 'app-rechercher-factures',
  templateUrl: './rechercher-factures.component.html',
  styleUrls: ['./rechercher-factures.component.css']
})
export class RechercherFacturesComponent implements OnInit {

  @Input() screenWidthh = 0;
  @Input() collapsed = false;

  isSideNavCollapsed = false;
  screenWidth = 0;
  data: string[] = [];
  
  listFacture: any;
  form: boolean = false;
  facture!: Facture;
  closeResult!: string;

  listReglement: any;
  reglement!: Reglement;

  listCarte: any;
  carte!: Carte;

  constructor(private axiosService: AxiosService,
    private factureService: FactureService, 
    private reglementService: ReglementService, 
    private carteService: CarteService,
    private modalService: NgbModal,  
  ) {}

  ngOnInit(): void {
    this.axiosService.request(
      "GET",
      "/messages",
      null
    ).then(
      (response) => this.data = response.data
    );

    this.getAllFactures();

    this.facture = {
      id_fact:null,
    date_fact: null,
    etat_fact: null,
    etat_paiement: null,
    montant_ttl: null,
    exo_cli: null,
    lib_exo: null,
    tbre_fiscale: null,
  };

  this.getAllReglements();

    this.reglement = {
      id_regle:null,
      mnt_regle: null,
      type_regl: null,
      date_regl: null,
      fact: null,
      carte: null,
  };

  this.getAllCartes();

    this.carte = {
      id_carte:null,
      lib_carte: null,
      cpt_carte: null,
  };

  }

  getAllFactures() {
    this.factureService.getAllFactures().subscribe(res => this.listFacture = res);
  }

  getAllCartes() {
    this.carteService.getAllCartes().subscribe(res => this.listCarte = res);
  }

  getAllReglements() {
    this.reglementService.getAllReglements().subscribe(res => this.listReglement = res);
  }



  editFacture(facture: Facture) {
    this.factureService.editFacture(facture).subscribe();
  }

  deleteFacture(idFacture: any) {
    this.factureService.deleteFacture(idFacture).subscribe(() => this.getAllFactures());
  }






  open(content: any, action: any) {
    if (action != null)
      this.facture = action
    else
      this.facture = new Facture();
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
    let styleClass = '';
    if (this.collapsed && this.screenWidthh > 768){
      styleClass='body-trimmed';
    } else if (this.collapsed && this.screenWidthh <= 768 && this.screenWidthh > 0){
      styleClass = 'body-md-screen';
    }
    return styleClass;
  }
}