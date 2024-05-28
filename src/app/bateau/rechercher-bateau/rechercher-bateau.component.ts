import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { AxiosService } from '../../axios.service';
import { SideNavToggle } from '../SideNavToggle.interface';


@Component({
  selector: 'app-rechercher-bateau',
  templateUrl: './rechercher-bateau.component.html',
  styleUrls: ['./rechercher-bateau.component.css']
})


export class RechercherBateauComponent implements OnInit {
  @Input() screenWidthh = 0;
  @Input() collapsed = false;

  isSideNavCollapsed = false;
  screenWidth = 0;
  data: string[] = [];

  constructor(private axiosService: AxiosService) {}

  ngOnInit(): void {
    this.axiosService.request('GET', '/messages', null).then(
      (response) => this.data = response.data
    );
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

  @ViewChild('section') section!: ElementRef;
  @ViewChild('overlay') overlay!: ElementRef;

  showModal(): void {
    this.section.nativeElement.classList.add('active');
    this.overlay.nativeElement.classList.add('active');
  }

  hideModal(): void {
    this.section.nativeElement.classList.remove('active');
    this.overlay.nativeElement.classList.remove('active');
  }

  closeOverlay(): void {
    this.hideModal();
  }

  boatsData: any[] = [
    { 
      nom: 'Bateau 1', 
      proprietaire: 'Propriétaire 1', 
      immatriculation: 'IMM-001', 
      type: 'Type 1', 
      pavillon: 'Pavillon 1', 
      marque: 'Marque 1', 
      adresse: '123 Rue Principale', 
      codePostal: '12345', 
      ville: 'Ville 1', 
      pays: 'Pays 1', 
      longueur: '10m', 
      largeur: '3m', 
      tirantEau: '1.5m', 
      tonnage: '5 tonnes', 
      email: 'bateau1@example.com', 
      autreNom: 'Autre Nom 1'
    },
    { 
      nom: 'Bateau 2', 
      proprietaire: 'Propriétaire 2', 
      immatriculation: 'IMM-002', 
      type: 'Type 2', 
      pavillon: 'Pavillon 2', 
      marque: 'Marque 2', 
      adresse: '456 Rue Elm', 
      codePostal: '54321', 
      ville: 'Ville 2', 
      pays: 'Pays 2', 
      longueur: '15m', 
      largeur: '4m', 
      tirantEau: '2m', 
      tonnage: '8 tonnes', 
      email: 'bateau2@example.com', 
      autreNom: 'Autre Nom 2'
    },
    { 
      nom: 'Bateau 3', 
      proprietaire: 'Propriétaire 3', 
      immatriculation: 'IMM-003', 
      type: 'Type 3', 
      pavillon: 'Pavillon 3', 
      marque: 'Marque 3', 
      adresse: '789 Rue Oak', 
      codePostal: '67890', 
      ville: 'Ville 3', 
      pays: 'Pays 3', 
      longueur: '12m', 
      largeur: '3.5m', 
      tirantEau: '1.8m', 
      tonnage: '6 tonnes', 
      email: 'bateau3@example.com', 
      autreNom: 'Autre Nom 3'
    },
    { 
      nom: 'Bateau 4', 
      proprietaire: 'Propriétaire 4', 
      immatriculation: 'IMM-004', 
      type: 'Type 4', 
      pavillon: 'Pavillon 4', 
      marque: 'Marque 4', 
      adresse: '101 Rue Pine', 
      codePostal: '13579', 
      ville: 'Ville 4', 
      pays: 'Pays 4', 
      longueur: '8m', 
      largeur: '2.5m', 
      tirantEau: '1.2m', 
      tonnage: '4 tonnes', 
      email: 'bateau4@example.com', 
      autreNom: 'Autre Nom 4'
    },
    { 
      nom: 'Bateau 5', 
      proprietaire: 'Propriétaire 5', 
      immatriculation: 'IMM-005', 
      type: 'Type 5', 
      pavillon: 'Pavillon 5', 
      marque: 'Marque 5', 
      adresse: '202 Rue Maple', 
      codePostal: '24680', 
      ville: 'Ville 5', 
      pays: 'Pays 5', 
      longueur: '20m', 
      largeur: '6m', 
      tirantEau: '3m', 
      tonnage: '15 tonnes', 
      email: 'bateau5@example.com', 
      autreNom: 'Autre Nom 5'
    },
    { 
      nom: 'Bateau 5', 
      proprietaire: 'Propriétaire 5', 
      immatriculation: 'IMM-005', 
      type: 'Type 5', 
      pavillon: 'Pavillon 5', 
      marque: 'Marque 5', 
      adresse: '202 Rue Maple', 
      codePostal: '24680', 
      ville: 'Ville 5', 
      pays: 'Pays 5', 
      longueur: '20m', 
      largeur: '6m', 
      tirantEau: '3m', 
      tonnage: '15 tonnes', 
      email: 'bateau5@example.com', 
      autreNom: 'Autre Nom 5'
    },{ 
      nom: 'Bateau 5', 
      proprietaire: 'Propriétaire 5', 
      immatriculation: 'IMM-005', 
      type: 'Type 5', 
      pavillon: 'Pavillon 5', 
      marque: 'Marque 5', 
      adresse: '202 Rue Maple', 
      codePostal: '24680', 
      ville: 'Ville 5', 
      pays: 'Pays 5', 
      longueur: '20m', 
      largeur: '6m', 
      tirantEau: '3m', 
      tonnage: '15 tonnes', 
      email: 'bateau5@example.com', 
      autreNom: 'Autre Nom 5'
    },{ 
      nom: 'Bateau 5', 
      proprietaire: 'Propriétaire 5', 
      immatriculation: 'IMM-005', 
      type: 'Type 5', 
      pavillon: 'Pavillon 5', 
      marque: 'Marque 5', 
      adresse: '202 Rue Maple', 
      codePostal: '24680', 
      ville: 'Ville 5', 
      pays: 'Pays 5', 
      longueur: '20m', 
      largeur: '6m', 
      tirantEau: '3m', 
      tonnage: '15 tonnes', 
      email: 'bateau5@example.com', 
      autreNom: 'Autre Nom 5'
    },{ 
      nom: 'Bateau 5', 
      proprietaire: 'Propriétaire 5', 
      immatriculation: 'IMM-005', 
      type: 'Type 5', 
      pavillon: 'Pavillon 5', 
      marque: 'Marque 5', 
      adresse: '202 Rue Maple', 
      codePostal: '24680', 
      ville: 'Ville 5', 
      pays: 'Pays 5', 
      longueur: '20m', 
      largeur: '6m', 
      tirantEau: '3m', 
      tonnage: '15 tonnes', 
      email: 'bateau5@example.com', 
      autreNom: 'Autre Nom 5'
    },{ 
      nom: 'Bateau 5', 
      proprietaire: 'Propriétaire 5', 
      immatriculation: 'IMM-005', 
      type: 'Type 5', 
      pavillon: 'Pavillon 5', 
      marque: 'Marque 5', 
      adresse: '202 Rue Maple', 
      codePostal: '24680', 
      ville: 'Ville 5', 
      pays: 'Pays 5', 
      longueur: '20m', 
      largeur: '6m', 
      tirantEau: '3m', 
      tonnage: '15 tonnes', 
      email: 'bateau5@example.com', 
      autreNom: 'Autre Nom 5'
    },{ 
      nom: 'Bateau 5', 
      proprietaire: 'Propriétaire 5', 
      immatriculation: 'IMM-005', 
      type: 'Type 5', 
      pavillon: 'Pavillon 5', 
      marque: 'Marque 5', 
      adresse: '202 Rue Maple', 
      codePostal: '24680', 
      ville: 'Ville 5', 
      pays: 'Pays 5', 
      longueur: '20m', 
      largeur: '6m', 
      tirantEau: '3m', 
      tonnage: '15 tonnes', 
      email: 'bateau5@example.com', 
      autreNom: 'Autre Nom 5'
    },{ 
      nom: 'Bateau 5', 
      proprietaire: 'Propriétaire 5', 
      immatriculation: 'IMM-005', 
      type: 'Type 5', 
      pavillon: 'Pavillon 5', 
      marque: 'Marque 5', 
      adresse: '202 Rue Maple', 
      codePostal: '24680', 
      ville: 'Ville 5', 
      pays: 'Pays 5', 
      longueur: '20m', 
      largeur: '6m', 
      tirantEau: '3m', 
      tonnage: '15 tonnes', 
      email: 'bateau5@example.com', 
      autreNom: 'Autre Nom 5'
    },
  ];
}
