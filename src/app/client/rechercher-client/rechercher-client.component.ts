import { Component, OnInit, Input } from '@angular/core';
import { AxiosService } from 'src/app/axios.service';
import { SideNavToggle } from '../SideNavToggle.interface';
import { ElementRef, ViewChild } from '@angular/core';
import { Client } from 'src/app/shared/Model/Client';
import { ClientService } from 'src/app/shared/Service/Client.service';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';


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

  listClient: any;
  Client!: Client;
  form: boolean = false;

  listPays: any;

  closeResult!: string;


  constructor(private axiosService: AxiosService, private ClientService: ClientService , private modalService: NgbModal) {
  }


  ngOnInit(): void {
    this.axiosService.request(
      "GET",
      "/messages",
      null
    ).then(
      (response) => this.data = response.data
    );
    this.generatePagination();
    this.getAllClients();

    this.Client = {
      id_cli: null,
    nom_cli: null,
    prenom_cli: null,
    etat_civil: null,
    adresse_cli: null,
    code_postal_cli: null,
    ville_cli: null,
    tel_cli: null,
    fax_cli: null,
    mobile_cli: null,
    email_cli: null,
    exo_cli: null,
    nom_pays: null,
    };

    
  }



  getAllClients() {
    this.ClientService.getAllClients().subscribe(res => this.listClient = res)
  }

  deleteClient(id_cli: any) {
    this.ClientService.deleteClient(id_cli).subscribe(() => this.getAllClients())
  }

  editClient(Client: Client) {
    this.ClientService.editClient(Client).subscribe();
  }



  open(content: any, action: any) {
    if (action != null)
      this.Client = action
    else
      this.Client = new Client();
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

  cancel() {
    this.form = false;
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
    }
  ];

}
