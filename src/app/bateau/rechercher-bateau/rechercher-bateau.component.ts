import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { AxiosService } from '../../axios.service';
import { SideNavToggle } from '../SideNavToggle.interface';
import { Client } from 'src/app/shared/Model/Client';
import { TypeBateau } from 'src/app/shared/Model/TypeBateau';
import { Bateau } from 'src/app/shared/Model/Bateau';
import { BateauService } from 'src/app/shared/Service/Bateau.service';
import { ClientService } from 'src/app/shared/Service/Client.service';
import { TypeBateauService } from 'src/app/shared/Service/TypeBateau.service';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as pdfMake from 'pdfmake/build/pdfMake'
import * as pdfFonts from 'pdfmake/build/vfs_fonts'

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
  totalPages: number = 3;
  currentPage: number = 1;
  paginationHTML: string = '';
  listBateau: any;
  bateau!: Bateau;
  closeResult!: string;

  listClient: any;
  Client!: Client;

  listTypeBateau: any;
  TypeBateau!: TypeBateau;
  form: boolean = false;

  prenoms: string[] = [];

  selectedClient: any;
  onNomChange(event: any) {
    if (this.selectedClient) {
      this.Client.prenom_cli = this.selectedClient.prenom_cli;
      this.prenoms = [this.selectedClient.prenom_cli];
    } else {
      this.Client.prenom_cli = '';
      this.prenoms = [];
    }
  }
  constructor(private axiosService: AxiosService,
    private BateauService: BateauService , 
    private typeBateauService: TypeBateauService , 
    private ClientService: ClientService
    , private modalService: NgbModal 


  ) {}

  ngOnInit(): void {
    this.axiosService.request('GET', '/messages', null).then(
      (response) => this.data = response.data
    );
    this.getAllClients();
    this.Client = {
      id_cli: null,
    nom_cli: null,
    prenom_cli: null,
    etat_civil: null,
    adresse_cli: null,
    ville_cli: null,
    tel_cli: null,
    fax_cli: null,
    mobile_cli: null,
    email_cli: null,
    exo_cli: null,
    pays:null,
    code_postal_cliii:null
    
    };

    this.getAllTypeBateaus();

    this.TypeBateau = {
        id_type_bat: null,
        type_bat:null,
        designation_bat:null,
        majoration_bat:null,
        multicoque:null,
    }

    this.getAllBateaux();

    this.bateau = {
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

  getAllTypeBateaus() {
    this.typeBateauService.getAllTypeBateau().subscribe((data: TypeBateau[]) => {
      this.listTypeBateau = data;
    });
  }

  getAllClients() {
    this.ClientService.getAllClients().subscribe(res => this.listClient = res)
  }




  getAllBateaux() {
    this.BateauService.getAllBateaux().subscribe(res => this.listBateau = res)
  }
  
  editBateau(bateau: Bateau) {
    this.BateauService.editBateau(bateau).subscribe();
  }
  
  deleteBateau(idBateau: any) {
    this.BateauService.deleteBateau(idBateau).subscribe(() => this.getAllBateaux())
  }

  open(content: any, action: any) {
    if (action != null)
      this.bateau = action
    else
      this.bateau = new Bateau();
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


  printBateau(bateau: any) {
    let docDefinition: any = {
      content: [
        { text: 'My Client', style: 'title' }, // Title element
        { text: '\n' }, // Add some space after the title
        { text: 'Bateau ID: ', bold: true },
        { text: bateau.id_bat + '\n', bold: true, color: 'blue' },
        { text: 'bateau Name: ', bold: true },
        { text: bateau.nom_bat + '\n', bold: true, italic: true },
      ],
      styles: {
        title: { // Define a custom style for the title
          bold: true,
          fontSize: 20, // Larger font size
          alignment: 'center', // Center alignment
          color: 'orange', // Orange color
          margin: [0, 0, 0, 20] // Margin bottom to add space below the title
        }
      }
    };

    pdfMake.createPdf(docDefinition).open();
  }







  onToggleSideNav(data: SideNavToggle): void {
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }

  generatePagination(): void {
    this.paginationHTML = this.createPagination(this.totalPages, this.currentPage);
  }

  createPagination(totalPages: number, page: number): string {
    let liTag = '';
    let active: string;
    let beforePage = page - 1;
    let afterPage = page + 1;

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
        active = 'active';
      } else {
        active = '';
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
    this.generatePagination();
  }

  getBodyClass(): string {
    let styleClass = '';
    if (this.collapsed && this.screenWidth > 768){
      styleClass = 'body-trimmed';
    } else if (this.collapsed && this.screenWidth <= 768 && this.screenWidth > 0){
      styleClass = 'body-md-screen';
    }
    return styleClass;
  }


  

}