import { Component, OnInit , Input} from '@angular/core';
import { ElementRef, ViewChild } from '@angular/core';
import { SideNavToggle } from '../SideNavToggle.interface';
import { AxiosService } from '../../axios.service';


@Component({
  selector: 'app-annuler-sejour',
  templateUrl: './annuler-sejour.component.html',
  styleUrls: ['./annuler-sejour.component.css']
})
export class AnnulerSejourComponent implements OnInit {

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
        poste: 'Poste 1', 
        numeroClient: '001', 
        nomClient: 'Client 1', 
        numeroBat: 'B001', 
        nomBat: 'Bateau 1', 
        sejour: 'Séjour 1', 
        debut: '01/05/2024', 
        fin: '10/05/2024', 
        solde: '100€'
      },
      { 
        poste: 'Poste 2', 
        numeroClient: '002', 
        nomClient: 'Client 2', 
        numeroBat: 'B002', 
        nomBat: 'Bateau 2', 
        sejour: 'Séjour 2', 
        debut: '03/05/2024', 
        fin: '15/05/2024', 
        solde: '150€'
      },
      { 
        poste: 'Poste 2', 
        numeroClient: '002', 
        nomClient: 'Client 2', 
        numeroBat: 'B002', 
        nomBat: 'Bateau 2', 
        sejour: 'Séjour 2', 
        debut: '03/05/2024', 
        fin: '15/05/2024', 
        solde: '150€'
      },
      { 
        poste: 'Poste 2', 
        numeroClient: '002', 
        nomClient: 'Client 2', 
        numeroBat: 'B002', 
        nomBat: 'Bateau 2', 
        sejour: 'Séjour 2', 
        debut: '03/05/2024', 
        fin: '15/05/2024', 
        solde: '150€'
      },
      { 
        poste: 'Poste 2', 
        numeroClient: '002', 
        nomClient: 'Client 2', 
        numeroBat: 'B002', 
        nomBat: 'Bateau 2', 
        sejour: 'Séjour 2', 
        debut: '03/05/2024', 
        fin: '15/05/2024', 
        solde: '150€'
      },
      { 
        poste: 'Poste 2', 
        numeroClient: '002', 
        nomClient: 'Client 2', 
        numeroBat: 'B002', 
        nomBat: 'Bateau 2', 
        sejour: 'Séjour 2', 
        debut: '03/05/2024', 
        fin: '15/05/2024', 
        solde: '150€'
      },
      { 
        poste: 'Poste 2', 
        numeroClient: '002', 
        nomClient: 'Client 2', 
        numeroBat: 'B002', 
        nomBat: 'Bateau 2', 
        sejour: 'Séjour 2', 
        debut: '03/05/2024', 
        fin: '15/05/2024', 
        solde: '150€'
      },
      { 
        poste: 'Poste 2', 
        numeroClient: '002', 
        nomClient: 'Client 2', 
        numeroBat: 'B002', 
        nomBat: 'Bateau 2', 
        sejour: 'Séjour 2', 
        debut: '03/05/2024', 
        fin: '15/05/2024', 
        solde: '150€'
      },
      { 
        poste: 'Poste 2', 
        numeroClient: '002', 
        nomClient: 'Client 2', 
        numeroBat: 'B002', 
        nomBat: 'Bateau 2', 
        sejour: 'Séjour 2', 
        debut: '03/05/2024', 
        fin: '15/05/2024', 
        solde: '150€'
      },
      { 
        poste: 'Poste 2', 
        numeroClient: '002', 
        nomClient: 'Client 2', 
        numeroBat: 'B002', 
        nomBat: 'Bateau 2', 
        sejour: 'Séjour 2', 
        debut: '03/05/2024', 
        fin: '15/05/2024', 
        solde: '150€'
      },
      { 
        poste: 'Poste 2', 
        numeroClient: '002', 
        nomClient: 'Client 2', 
        numeroBat: 'B002', 
        nomBat: 'Bateau 2', 
        sejour: 'Séjour 2', 
        debut: '03/05/2024', 
        fin: '15/05/2024', 
        solde: '150€'
      },
      { 
        poste: 'Poste 2', 
        numeroClient: '002', 
        nomClient: 'Client 2', 
        numeroBat: 'B002', 
        nomBat: 'Bateau 2', 
        sejour: 'Séjour 2', 
        debut: '03/05/2024', 
        fin: '15/05/2024', 
        solde: '150€'
      },
      { 
        poste: 'Poste 2', 
        numeroClient: '002', 
        nomClient: 'Client 2', 
        numeroBat: 'B002', 
        nomBat: 'Bateau 2', 
        sejour: 'Séjour 2', 
        debut: '03/05/2024', 
        fin: '15/05/2024', 
        solde: '150€'
      },
    ];
}
