import { Component, OnInit,Input } from '@angular/core';
import { SideNavToggle } from '../SideNavToggle.interface';
import { AxiosService } from '../../axios.service';

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
  totalPages: number = 3;
  currentPage: number = 1;
  paginationHTML: string = '';

  constructor(private axiosService: AxiosService) {}

  ngOnInit(): void {
    this.axiosService.request(
      "GET",
      "/messages",
      null
    ).then(
      (response) => this.data = response.data
    );
    this.generatePagination();
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

  


























  message(): void {
    const nomBateauInput: HTMLInputElement | null = document.getElementById('nom_bat') as HTMLInputElement;
    const numeroBateauInput: HTMLInputElement | null = document.getElementById('num_bat') as HTMLInputElement;
    const nomProprietaireInput: HTMLInputElement | null = document.getElementById('nom_prop') as HTMLInputElement;
    const numeroProprietaireInput: HTMLInputElement | null = document.getElementById('num_prop') as HTMLInputElement;
    const nomPortInput: HTMLInputElement | null = document.getElementById('nom_port') as HTMLInputElement;
    const numeroPortInput: HTMLInputElement | null = document.getElementById('num_port') as HTMLInputElement;
    const immatriculationInput: HTMLInputElement | null = document.getElementById('immat_bat') as HTMLInputElement;
    const autreNomInput: HTMLInputElement | null = document.getElementById('autre_nom') as HTMLInputElement;
    const pavillonInput: HTMLInputElement | null = document.getElementById('pavillon') as HTMLInputElement;
    const marqueInput: HTMLInputElement | null = document.getElementById('marque') as HTMLInputElement;
    const adresseInput: HTMLInputElement | null = document.getElementById('adresse') as HTMLInputElement;
    const emailInput: HTMLInputElement | null = document.getElementById('email') as HTMLInputElement;
    const villeInput: HTMLInputElement | null = document.getElementById('ville') as HTMLInputElement;
    const paysInput: HTMLInputElement | null = document.getElementById('pays') as HTMLInputElement;
    const codePostaleInput: HTMLInputElement | null = document.getElementById('code_postale') as HTMLInputElement;
    const longueurInput: HTMLInputElement | null = document.getElementById('longueur') as HTMLInputElement;
    const largeurInput: HTMLInputElement | null = document.getElementById('largeur') as HTMLInputElement;
    const tirantEauInput: HTMLInputElement | null = document.getElementById('tirant_eau') as HTMLInputElement;
    const tonnageInput: HTMLInputElement | null = document.getElementById('tonnage') as HTMLInputElement;
    const numTelInput: HTMLInputElement | null = document.getElementById('num_tel') as HTMLInputElement;
    const faxInput: HTMLInputElement | null = document.getElementById('fax') as HTMLInputElement;
    const mobileInput: HTMLInputElement | null = document.getElementById('mobile') as HTMLInputElement;
    const numTypeInput: HTMLInputElement | null = document.getElementById('num_type') as HTMLInputElement;
    const designationInput: HTMLInputElement | null = document.getElementById('designation') as HTMLInputElement;
    const majorationInput: HTMLInputElement | null = document.getElementById('majoration') as HTMLInputElement;
    const numAssuranceInput: HTMLInputElement | null = document.getElementById('num_assur') as HTMLInputElement;
    const nomAssuranceInput: HTMLInputElement | null = document.getElementById('nom_assur') as HTMLInputElement;

    const successDiv: HTMLDivElement | null = document.getElementById('success') as HTMLDivElement;
    const dangerDiv: HTMLDivElement | null = document.getElementById('danger') as HTMLDivElement;

    // Vérification si tous les champs du formulaire sont remplis
    if (!nomBateauInput?.value || !numeroBateauInput?.value || !nomProprietaireInput?.value || !numeroProprietaireInput?.value || !nomPortInput?.value || !numeroPortInput?.value || !immatriculationInput?.value || !autreNomInput?.value || !pavillonInput?.value || !marqueInput?.value || !adresseInput?.value || !emailInput?.value || !villeInput?.value || !paysInput?.value || !codePostaleInput?.value || !longueurInput?.value || !largeurInput?.value || !tirantEauInput?.value || !tonnageInput?.value || !numTelInput?.value || !faxInput?.value || !mobileInput?.value || !numTypeInput?.value || !designationInput?.value || !majorationInput?.value || !numAssuranceInput?.value || !nomAssuranceInput?.value) {
      if (dangerDiv) {
        dangerDiv.style.display = 'block';
      }
      return; // Arrête l'exécution de la fonction si un champ est vide
    }

    setTimeout(() => {
      // Réinitialisez les valeurs des champs de formulaire ici si nécessaire
    }, 2000);

    if (successDiv) {
      successDiv.style.display = 'block';
    }

    setTimeout(() => {
      if (dangerDiv) dangerDiv.style.display = 'none';
      if (successDiv) successDiv.style.display = 'none';
    }, 4000);
  }

















}
