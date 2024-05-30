import { Component, OnInit, Input } from '@angular/core';
import { SideNavToggle } from '../SideNavToggle.interface';
import { AxiosService } from 'src/app/axios.service';
import { Client } from 'src/app/shared/Model/Client';
import { Pays } from 'src/app/shared/Model/Pays';
import { ClientService } from 'src/app/shared/Service/Client.service';
import { PaysService } from 'src/app/shared/Service/Pays.service';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-ajouter-client',
  templateUrl: './ajouter-client.component.html',
  styleUrls: ['./ajouter-client.component.css']
})
export class AjouterClientComponent implements OnInit {
  @Input() screenWidthh = 0;
  @Input() collapsed = false;

  isSideNavCollapsed = false;
  screenWidth = 0;
  data: string[] = [];
  totalPages: number = 2;
  currentPage: number = 1;
  paginationHTML: string = '';

  listClient: any;
  form: boolean = false;
  Client!: Client;
  closeResult!: string;

  listPays: any;
  Pays!: Pays;

  constructor(private axiosService: AxiosService,
    private ClientService: ClientService,
    private modalService: NgbModal,
    private PaysService: PaysService) { }

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
    this.getAllPays();

    this.Pays = {
      nom_pays:null,
    nationnalite : null,
    pavillon : null,
    }
  }


  getAllClients() {
    this.ClientService.getAllClients().subscribe(res => this.listClient = res)
  }

  getAllPays() {
    this.PaysService.getAllPays().subscribe(res => this.listPays = res)
  }

  addPaysAndClient() {
    this.PaysService.addPays(this.Pays).subscribe(() => {
      this.getAllPays();
    });
    this.ClientService.addClient(this.Client).subscribe(() => {
      this.getAllClients();
    });
  }

  editPaysAndClient() {
    this.PaysService.editPays(this.Pays).subscribe(() => {
      this.getAllPays();
    });
    this.ClientService.editClient(this.Client).subscribe(() => {
      this.getAllClients();
    });
  }

  deletePaysAndClient(idPays: any, idClient: any) {
    this.PaysService.deletePays(idPays).subscribe(() => {
      this.getAllPays();
    });
    this.ClientService.deleteClient(idClient).subscribe(() => {
      this.getAllClients();
    });
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
