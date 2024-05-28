import { Component, OnInit, Input } from '@angular/core';
import { AxiosService } from 'src/app/axios.service';
import { SideNavToggle } from '../SideNavToggle.interface';
import { ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-etat-reservation-arrivees',
  templateUrl: './etat-reservation-arrivees.component.html',
  styleUrls: ['./etat-reservation-arrivees.component.css']
})
export class EtatReservationArriveesComponent implements OnInit {


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
    //this.displayedReservations = this.reservations.slice(0, 9);
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


  @ViewChild('section') section!: ElementRef;
  @ViewChild('overlay') overlay!: ElementRef;

  showModal() {
    this.section.nativeElement.classList.add('active');
    this.overlay.nativeElement.classList.add('active');
  }

  hideModal() {
    this.section.nativeElement.classList.remove('active');
    this.overlay.nativeElement.classList.remove('active');
  }

  closeOverlay() {
    this.hideModal();
  }

  reservationsData: any[] = [
    { 
      numeroReservation: 'R001', 
      poste: 'Poste 1', 
      type: 'Type 1', 
      numeroClient: '001', 
      nomClient: 'Client 1', 
      nomBateau: 'Bateau 1', 
      longueur: '10m', 
      debut: '01/05/2024', 
      fin: '10/05/2024', 
      accompte: '100€', 
      etat: 'En cours'
    },
    { 
      numeroReservation: 'R002', 
      poste: 'Poste 2', 
      type: 'Type 2', 
      numeroClient: '002', 
      nomClient: 'Client 2', 
      nomBateau: 'Bateau 2', 
      longueur: '12m', 
      debut: '03/05/2024', 
      fin: '15/05/2024', 
      accompte: '150€', 
      etat: 'Terminée'
    },
    { 
      numeroReservation: 'R003', 
      poste: 'Poste 3', 
      type: 'Type 3', 
      numeroClient: '003', 
      nomClient: 'Client 3', 
      nomBateau: 'Bateau 3', 
      longueur: '8m', 
      debut: '05/05/2024', 
      fin: '12/05/2024', 
      accompte: '80€', 
      etat: 'En cours'
    },
    { 
      numeroReservation: 'R004', 
      poste: 'Poste 4', 
      type: 'Type 4', 
      numeroClient: '004', 
      nomClient: 'Client 4', 
      nomBateau: 'Bateau 4', 
      longueur: '15m', 
      debut: '08/05/2024', 
      fin: '18/05/2024', 
      accompte: '200€', 
      etat: 'En cours'
    },
    { 
      numeroReservation: 'R005', 
      poste: 'Poste 5', 
      type: 'Type 5', 
      numeroClient: '005', 
      nomClient: 'Client 5', 
      nomBateau: 'Bateau 5', 
      longueur: '18m', 
      debut: '10/05/2024', 
      fin: '20/05/2024', 
      accompte: '250€', 
      etat: 'Terminée'
    },
    { 
      numeroReservation: 'R005', 
      poste: 'Poste 5', 
      type: 'Type 5', 
      numeroClient: '005', 
      nomClient: 'Client 5', 
      nomBateau: 'Bateau 5', 
      longueur: '18m', 
      debut: '10/05/2024', 
      fin: '20/05/2024', 
      accompte: '250€', 
      etat: 'Terminée'
    },
    { 
      numeroReservation: 'R005', 
      poste: 'Poste 5', 
      type: 'Type 5', 
      numeroClient: '005', 
      nomClient: 'Client 5', 
      nomBateau: 'Bateau 5', 
      longueur: '18m', 
      debut: '10/05/2024', 
      fin: '20/05/2024', 
      accompte: '250€', 
      etat: 'Terminée'
    },
    { 
      numeroReservation: 'R005', 
      poste: 'Poste 5', 
      type: 'Type 5', 
      numeroClient: '005', 
      nomClient: 'Client 5', 
      nomBateau: 'Bateau 5', 
      longueur: '18m', 
      debut: '10/05/2024', 
      fin: '20/05/2024', 
      accompte: '250€', 
      etat: 'Terminée'
    },
    { 
      numeroReservation: 'R005', 
      poste: 'Poste 5', 
      type: 'Type 5', 
      numeroClient: '005', 
      nomClient: 'Client 5', 
      nomBateau: 'Bateau 5', 
      longueur: '18m', 
      debut: '10/05/2024', 
      fin: '20/05/2024', 
      accompte: '250€', 
      etat: 'Terminée'
    },
    { 
      numeroReservation: 'R005', 
      poste: 'Poste 5', 
      type: 'Type 5', 
      numeroClient: '005', 
      nomClient: 'Client 5', 
      nomBateau: 'Bateau 5', 
      longueur: '18m', 
      debut: '10/05/2024', 
      fin: '20/05/2024', 
      accompte: '250€', 
      etat: 'Terminée'
    },
    { 
      numeroReservation: 'R005', 
      poste: 'Poste 5', 
      type: 'Type 5', 
      numeroClient: '005', 
      nomClient: 'Client 5', 
      nomBateau: 'Bateau 5', 
      longueur: '18m', 
      debut: '10/05/2024', 
      fin: '20/05/2024', 
      accompte: '250€', 
      etat: 'Terminée'
    },
    { 
      numeroReservation: 'R005', 
      poste: 'Poste 5', 
      type: 'Type 5', 
      numeroClient: '005', 
      nomClient: 'Client 5', 
      nomBateau: 'Bateau 5', 
      longueur: '18m', 
      debut: '10/05/2024', 
      fin: '20/05/2024', 
      accompte: '250€', 
      etat: 'Terminée'
    },
    { 
      numeroReservation: 'R005', 
      poste: 'Poste 5', 
      type: 'Type 5', 
      numeroClient: '005', 
      nomClient: 'Client 5', 
      nomBateau: 'Bateau 5', 
      longueur: '18m', 
      debut: '10/05/2024', 
      fin: '20/05/2024', 
      accompte: '250€', 
      etat: 'Terminée'
    },
    { 
      numeroReservation: 'R005', 
      poste: 'Poste 5', 
      type: 'Type 5', 
      numeroClient: '005', 
      nomClient: 'Client 5', 
      nomBateau: 'Bateau 5', 
      longueur: '18m', 
      debut: '10/05/2024', 
      fin: '20/05/2024', 
      accompte: '250€', 
      etat: 'Terminée'
    },
    { 
      numeroReservation: 'R005', 
      poste: 'Poste 5', 
      type: 'Type 5', 
      numeroClient: '005', 
      nomClient: 'Client 5', 
      nomBateau: 'Bateau 5', 
      longueur: '18m', 
      debut: '10/05/2024', 
      fin: '20/05/2024', 
      accompte: '250€', 
      etat: 'Terminée'
    },
    { 
      numeroReservation: 'R005', 
      poste: 'Poste 5', 
      type: 'Type 5', 
      numeroClient: '005', 
      nomClient: 'Client 5', 
      nomBateau: 'Bateau 5', 
      longueur: '18m', 
      debut: '10/05/2024', 
      fin: '20/05/2024', 
      accompte: '250€', 
      etat: 'Terminée'
    },
    { 
      numeroReservation: 'R005', 
      poste: 'Poste 5', 
      type: 'Type 5', 
      numeroClient: '005', 
      nomClient: 'Client 5', 
      nomBateau: 'Bateau 5', 
      longueur: '18m', 
      debut: '10/05/2024', 
      fin: '20/05/2024', 
      accompte: '250€', 
      etat: 'Terminée'
    }
  ];

}
