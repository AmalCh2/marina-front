import { Component, OnInit, Input } from '@angular/core';
import { AxiosService } from 'src/app/axios.service';
import { SideNavToggle } from '../../SideNavToggle.interface';
import { Consommation } from 'src/app/shared/Model/Consommation';
import { ConsommationService } from 'src/app/shared/Service/Consommation.service';
import { SejourService } from 'src/app/shared/Service/Sejour.service';
import { Sejour } from 'src/app/shared/Model/Sejour';
import { BateauService } from 'src/app/shared/Service/Bateau.service';
import { Bateau } from 'src/app/shared/Model/Bateau';

@Component({
  selector: 'app-ajouter-facture',
  templateUrl: './ajouter-facture.component.html',
  styleUrls: ['./ajouter-facture.component.css']
})
export class AjouterFactureComponent implements OnInit {

  @Input() screenWidthh = 0;
  @Input() collapsed = false;

  isSideNavCollapsed = false;
  screenWidth = 0;
  data: string[] = [];
  totalPages: number = 2;
  currentPage: number = 1;
  paginationHTML: string = '';

  listConsommation: any;
  consommation!: Consommation;
  listSejour: any;
  sejour!: Sejour;
  listBateau: any;
  Bateau!: Bateau;

  constructor(private axiosService: AxiosService , private consommationService: ConsommationService,private SejourService: SejourService,private BateauService: BateauService) {}

  ngOnInit(): void {
    this.axiosService.request(
      "GET",
      "/messages",
      null
    ).then(
      (response) => this.data = response.data
    );
    this.generatePagination();
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
    sej: Sejour,
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
      bat:Bateau,
  }

  this.getAllBateaux();

    this.Bateau = {
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
    }

  }
  getAllBateaux() {
    this.BateauService.getAllBateaux().subscribe(res => this.listBateau = res)
  }
  getAllSejours() {
    this.SejourService.getAllSejours().subscribe(res => this.listSejour = res)
  }

  getAllConsommation() {
    this.consommationService.getAllConsommations().subscribe(res => this.listConsommation = res);
  }
  onToggleSideNav(data: SideNavToggle): void {
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }

  generatePagination(): void {
    this.paginationHTML = this.createPagination(this.totalPages, this.currentPage);
  }

  createPagination(totalPages: number, page: number): string {
    let liTag: string = '';
    let active: string;
    let beforePage: number = page - 1;
    let afterPage: number = page + 1;

    if (page > 1) {
      liTag += `<li class="btn prev" (click)="changePage(${page - 1})"><span><i class="fas fa-angle-left"></i> Prev</span></li>`;
    }

    if (page > 2) {
      liTag += `<li class="first numb" (click)="changePage(1)"><span>1</span></li>`;
      if (page > 3) {
        liTag += `<li class="dots"><span>...</span></li>`;
      }
    }

    if (page === totalPages) {
      beforePage = beforePage - 2;
    } else if (page === totalPages - 1) {
      beforePage = beforePage - 1;
    }

    if (page === 1) {
      afterPage = afterPage + 2;
    } else if (page === 2) {
      afterPage = afterPage + 1;
    }

    for (let plength = beforePage; plength <= afterPage; plength++) {
      if (plength > totalPages) {
        continue;
      }
      if (plength === 0) {
        plength = plength + 1;
      }
      if (page === plength) {
        active = "active";
      } else {
        active = "";
      }
      liTag += `<li class="numb ${active}" (click)="changePage(${plength})"><span>${plength}</span></li>`;
    }

    if (page < totalPages - 1) {
      if (page < totalPages - 2) {
        liTag += `<li class="dots"><span>...</span></li>`;
      }
      liTag += `<li class="last numb" (click)="changePage(${totalPages})"><span>${totalPages}</span></li>`;
    }

    if (page < totalPages) {
      liTag += `<li class="btn next" (click)="changePage(${page + 1})"><span>Next <i class="fas fa-angle-right"></i></span></li>`;
    }

    return liTag;
  }

  getPages(): number[] {
    const pages = [];
    for (let i = 1; i <= this.totalPages; i++) {
      pages.push(i);
    }
    return pages;
  }

  changePage(page: number): void {
    this.currentPage = page;
    this.generatePagination(); // Appel pour régénérer la pagination
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
