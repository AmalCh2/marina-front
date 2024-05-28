import { Component, OnInit, Input } from '@angular/core';
import { AxiosService } from 'src/app/axios.service';
import { SideNavToggle } from '../SideNavToggle.interface';
import { ElementRef, ViewChild } from '@angular/core';


@Component({
  selector: 'app-rechercher-client',
  templateUrl: './rechercher-client.component.html',
  styleUrls: ['./rechercher-client.component.css']
})
export class RechercherClientComponent implements OnInit {

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

  clientsData: any[] = [
    { 
      clientNumber: 1, 
      lastName: 'Doe', 
      firstName: 'John', 
      civilStatus: 'Single', 
      address: '123 Main Street', 
      postalCode: '12345', 
      city: 'City', 
      country: 'Country', 
      nationality: 'Nationality', 
      pavilion: 'Pavilion', 
      phoneNumber: '123-456-7890', 
      mobile: '123-456-7890', 
      fax: '123-456-7890', 
      exemption: true, 
      email: 'john.doe@example.com' 
    },
    { 
      clientNumber: 2, 
      lastName: 'Smith', 
      firstName: 'Jane', 
      civilStatus: 'Married', 
      address: '456 Elm Street', 
      postalCode: '54321', 
      city: 'Town', 
      country: 'Country', 
      nationality: 'Nationality', 
      pavilion: 'Pavilion', 
      phoneNumber: '987-654-3210', 
      mobile: '987-654-3210', 
      fax: '987-654-3210', 
      exemption: false, 
      email: 'jane.smith@example.com' 
    },
    { 
      clientNumber: 2, 
      lastName: 'Smith', 
      firstName: 'Jane', 
      civilStatus: 'Married', 
      address: '456 Elm Street', 
      postalCode: '54321', 
      city: 'Town', 
      country: 'Country', 
      nationality: 'Nationality', 
      pavilion: 'Pavilion', 
      phoneNumber: '987-654-3210', 
      mobile: '987-654-3210', 
      fax: '987-654-3210', 
      exemption: false, 
      email: 'jane.smith@example.com' 
    },
    { 
      clientNumber: 3, 
      lastName: 'Johnson', 
      firstName: 'Robert', 
      civilStatus: 'Single', 
      address: '789 Oak Street', 
      postalCode: '67890', 
      city: 'Village', 
      country: 'Country', 
      nationality: 'Nationality', 
      pavilion: 'Pavilion', 
      phoneNumber: '456-789-0123', 
      mobile: '456-789-0123', 
      fax: '456-789-0123', 
      exemption: true, 
      email: 'robert.johnson@example.com' 
    },
    { 
      clientNumber: 3, 
      lastName: 'Johnson', 
      firstName: 'Robert', 
      civilStatus: 'Single', 
      address: '789 Oak Street', 
      postalCode: '67890', 
      city: 'Village', 
      country: 'Country', 
      nationality: 'Nationality', 
      pavilion: 'Pavilion', 
      phoneNumber: '456-789-0123', 
      mobile: '456-789-0123', 
      fax: '456-789-0123', 
      exemption: true, 
      email: 'robert.johnson@example.com' 
    },
    { 
      clientNumber: 3, 
      lastName: 'Johnson', 
      firstName: 'Robert', 
      civilStatus: 'Single', 
      address: '789 Oak Street', 
      postalCode: '67890', 
      city: 'Village', 
      country: 'Country', 
      nationality: 'Nationality', 
      pavilion: 'Pavilion', 
      phoneNumber: '456-789-0123', 
      mobile: '456-789-0123', 
      fax: '456-789-0123', 
      exemption: true, 
      email: 'robert.johnson@example.com' 
    },
    { 
      clientNumber: 3, 
      lastName: 'Johnson', 
      firstName: 'Robert', 
      civilStatus: 'Single', 
      address: '789 Oak Street', 
      postalCode: '67890', 
      city: 'Village', 
      country: 'Country', 
      nationality: 'Nationality', 
      pavilion: 'Pavilion', 
      phoneNumber: '456-789-0123', 
      mobile: '456-789-0123', 
      fax: '456-789-0123', 
      exemption: true, 
      email: 'robert.johnson@example.com' 
    },
    { 
      clientNumber: 3, 
      lastName: 'Johnson', 
      firstName: 'Robert', 
      civilStatus: 'Single', 
      address: '789 Oak Street', 
      postalCode: '67890', 
      city: 'Village', 
      country: 'Country', 
      nationality: 'Nationality', 
      pavilion: 'Pavilion', 
      phoneNumber: '456-789-0123', 
      mobile: '456-789-0123', 
      fax: '456-789-0123', 
      exemption: true, 
      email: 'robert.johnson@example.com' 
    },
    { 
      clientNumber: 3, 
      lastName: 'Johnson', 
      firstName: 'Robert', 
      civilStatus: 'Single', 
      address: '789 Oak Street', 
      postalCode: '67890', 
      city: 'Village', 
      country: 'Country', 
      nationality: 'Nationality', 
      pavilion: 'Pavilion', 
      phoneNumber: '456-789-0123', 
      mobile: '456-789-0123', 
      fax: '456-789-0123', 
      exemption: true, 
      email: 'robert.johnson@example.com' 
    },
    { 
      clientNumber: 3, 
      lastName: 'Johnson', 
      firstName: 'Robert', 
      civilStatus: 'Single', 
      address: '789 Oak Street', 
      postalCode: '67890', 
      city: 'Village', 
      country: 'Country', 
      nationality: 'Nationality', 
      pavilion: 'Pavilion', 
      phoneNumber: '456-789-0123', 
      mobile: '456-789-0123', 
      fax: '456-789-0123', 
      exemption: true, 
      email: 'robert.johnson@example.com' 
    },
    { 
      clientNumber: 3, 
      lastName: 'Johnson', 
      firstName: 'Robert', 
      civilStatus: 'Single', 
      address: '789 Oak Street', 
      postalCode: '67890', 
      city: 'Village', 
      country: 'Country', 
      nationality: 'Nationality', 
      pavilion: 'Pavilion', 
      phoneNumber: '456-789-0123', 
      mobile: '456-789-0123', 
      fax: '456-789-0123', 
      exemption: true, 
      email: 'robert.johnson@example.com' 
    },
    { 
      clientNumber: 3, 
      lastName: 'Johnson', 
      firstName: 'Robert', 
      civilStatus: 'Single', 
      address: '789 Oak Street', 
      postalCode: '67890', 
      city: 'Village', 
      country: 'Country', 
      nationality: 'Nationality', 
      pavilion: 'Pavilion', 
      phoneNumber: '456-789-0123', 
      mobile: '456-789-0123', 
      fax: '456-789-0123', 
      exemption: true, 
      email: 'robert.johnson@example.com' 
    },
    { 
      clientNumber: 3, 
      lastName: 'Johnson', 
      firstName: 'Robert', 
      civilStatus: 'Single', 
      address: '789 Oak Street', 
      postalCode: '67890', 
      city: 'Village', 
      country: 'Country', 
      nationality: 'Nationality', 
      pavilion: 'Pavilion', 
      phoneNumber: '456-789-0123', 
      mobile: '456-789-0123', 
      fax: '456-789-0123', 
      exemption: true, 
      email: 'robert.johnson@example.com' 
    },
    { 
      clientNumber: 3, 
      lastName: 'Johnson', 
      firstName: 'Robert', 
      civilStatus: 'Single', 
      address: '789 Oak Street', 
      postalCode: '67890', 
      city: 'Village', 
      country: 'Country', 
      nationality: 'Nationality', 
      pavilion: 'Pavilion', 
      phoneNumber: '456-789-0123', 
      mobile: '456-789-0123', 
      fax: '456-789-0123', 
      exemption: true, 
      email: 'robert.johnson@example.com' 
    }
  ];

}
