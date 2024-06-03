import { Component, OnInit, Input } from '@angular/core';
import { AxiosService } from 'src/app/axios.service';
import { SideNavToggle } from '../SideNavToggle.interface';
import { ElementRef, ViewChild } from '@angular/core';
import { Client } from 'src/app/shared/Model/Client';
import { ClientService } from 'src/app/shared/Service/Client.service';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import * as pdfMake from 'pdfmake/build/pdfMake'
import * as pdfFonts from 'pdfmake/build/vfs_fonts'
import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Pays } from 'src/app/shared/Model/Pays';
import { PaysService } from 'src/app/shared/Service/Pays.service';

( pdfMake as any ).vfs= pdfFonts.pdfMake.vfs;
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


  Pays!: Pays;
  nationnalites: string[] = [];

  selectedPays: any;
  onNomChange(event: any) {
    if (this.selectedPays) {
      this.Pays.nationnalite = this.selectedPays.nationnalite;
      this.nationnalites = [this.selectedPays.nationnalite];
    } else {
      this.Pays.nationnalite = '';
      this.nationnalites = [];
    }
  }


  constructor(private axiosService: AxiosService, private ClientService: ClientService , private modalService: NgbModal,private PaysService: PaysService) {
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
    ville_cli: null,
    tel_cli: null,
    fax_cli: null,
    mobile_cli: null,
    email_cli: null,
    exo_cli: null,
    pays:null,
    code_postal_cliii:null
    
    };
    this.getAllPays();

    this.Pays = {
    nom_pays:null,
    nationnalite : null,
    pavillon : null,
    }
    
  }

  getAllPays() {
    this.PaysService.getAllPays().subscribe(res => this.listPays = res)
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



  archiveClient(id: number): void {
    this.ClientService.archiveClient(id).subscribe(
      () => {
        console.log('Client archived');
        this.getAllClients();
      }
    );
  }

  printClient(client: any) {
    // Mapping for attribute names
    const attributeNames: { [key: string]: string } = {
      id_cli: 'N° du client',
      nom_cli: 'Nom du client',
      prenom_cli: 'Prénom du client',
      etat_civil: 'État civil',
      adresse_cli: 'Adresse',
      ville_cli: 'Ville',
      tel_cli: 'Téléphone',
      fax_cli: 'Fax',
      mobile_cli: 'Mobile',
      email_cli: 'Email',
      exo_cli: 'Exonération',
      'pays.nom_pays': 'Pays',
      'pays.pavillon': 'Pavillon',
      'pays.nationnalite': 'Nationnalité',
      code_postal_cliii: 'Code Postal'
    };
  
    let docDefinition: any = {
      content: [
        { text: 'Information du client', style: 'header' },
        {
          columns: [
            {
              width: 'auto',
              text: attributeNames['id_cli'] + ':',
              style: 'label'
            },
            {
              width: '*',
              text: client.id_cli,
              style: 'value'
            }
          ]
        },
        {
          columns: [
            {
              width: 'auto',
              text: attributeNames['nom_cli'] + ':',
              style: 'label'
            },
            {
              width: '*',
              text: client.nom_cli,
              style: 'value'
            }
          ]
        },
        {
          columns: [
            {
              width: 'auto',
              text: attributeNames['prenom_cli'] + ':',
              style: 'label'
            },
            {
              width: '*',
              text: client.prenom_cli,
              style: 'value'
            }
          ]
        },
        {
          columns: [
            {
              width: 'auto',
              text: attributeNames['etat_civil'] + ':',
              style: 'label'
            },
            {
              width: '*',
              text: client.etat_civil,
              style: 'value'
            }
          ]
        },
        { text: '\n' }, // Add some space before other attributes
        {
          table: {
            headerRows: 1,
            widths: ['*', '*'],
            body: [
              [
                { text: 'Les autres coordonnées', style: 'tableHeader' },
                { text: '', style: 'tableHeader' }
              ],[
                {
                  width: 'auto',
                  text: attributeNames['pays.nom_pays'] + ':',
                  style: 'label'
                },
                {
                  width: '*',
                  text: client.pays?.nom_pays,
                  style: 'value'
                }
              ],[
                {
                  width: 'auto',
                  text: attributeNames['pays.pavillon'] + ':',
                  style: 'label'
                },
                {
                  width: '*',
                  text: client.pays?.pavillon,
                  style: 'value'
                }
              ],[
                {
                  width: 'auto',
                  text: attributeNames['pays.nationnalite'] + ':',
                  style: 'label'
                },
                {
                  width: '*',
                  text: client.pays?.nationnalite,
                  style: 'value'
                }
              ],
              // Dynamically add other attributes
              ...Object.keys(client).filter(key => key !== 'id_cli' && key !== 'nom_cli' && key !== 'prenom_cli' && key !== 'etat_civil' && key !== 'archived' && key !== 'pays').map(key => [
                { text: (attributeNames[key] || key.replace('_', ' ').toUpperCase()), style: 'label' },
                { text: client[key], style: 'value' }
              ])
            ]
          },
          layout: 'lightHorizontalLines'
        }
      ],
      styles: {
        header: {
          fontSize: 24,
          bold: true,
          margin: [0, 0, 0, 10],
          alignment: 'center',
          color: '#002155'
        },
        label: {
          fontSize: 14,
          bold: true,
          margin: [0, 5, 0, 5],
          color: '#333'
        },
        value: {
          fontSize: 14,
          margin: [0, 5, 0, 5],
          color: '#002155'
        },
        tableHeader: {
          bold: true,
          fontSize: 15,
          color: 'white',
          fillColor: '#002155'
        }
      },
      defaultStyle: {
        columnGap: 20
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
  
}