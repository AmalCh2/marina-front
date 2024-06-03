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
    // Mapping for attribute names
    const attributeNames: { [key: string]: string } = {
      id_bat: 'N° du bateau',
      immatriculation_bat: 'Immatriculation du bateau',
      autre_ident_nom_bat: 'Autre identification ou nom du bateau',
      nom_bat: 'Nom du bateau',
      largeur_bat: 'Largeur du bateau',
      longueur_bat: 'Longueur du bateau',
      tirant_eau_bat: 'Tirant d\'eau',
      tonnage_bat: 'Tonnage',
      pavillon_bat: 'Pavillon',
      marque_bat: 'Marque du bateau',
      num_assur: 'Numéro d\'assurance',
      nom_assur: 'Nom de l\'assureur',
      date_exp: 'Date d\'expiration de l\'assurance',
      adresse_bat: 'Adresse',
      code_postal_bat: 'Code Postal',
      ville_bat: 'Ville',
      'pays.nom_pays': 'Pays',
      tel_bat: 'Téléphone',
      fax_bat: 'Fax',
      mobile_bat: 'Mobile',
      email_bat: 'Email',
      observation: 'Observation',
      date_mvt: 'Date de mouvement',
      depart_mvt: 'Départ',
      arrivee_mvt: 'Arrivée',
      commentaire_mvt: 'Commentaire du mouvement',
      id_emp: 'N° de l\'employé',
      'typeBateau.type_bat': 'Type de bateau',
      'port.nom_port': 'Port',
      'client.nom_cli': 'Nom du client',
      'client.prenom_cli': 'Prénom du client'
    };
  
    let docDefinition: any = {
      content: [
        { text: 'Information du bateau', style: 'header' },
        {
          columns: [
            {
              width: 'auto',
              text: attributeNames['id_bat'] + ':',
              style: 'label'
            },
            {
              width: '*',
              text: bateau.id_bat,
              style: 'value'
            }
          ]
        },
        {
          columns: [
            {
              width: 'auto',
              text: attributeNames['nom_bat'] + ':',
              style: 'label'
            },
            {
              width: '*',
              text: bateau.nom_bat,
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
                  text: attributeNames['port.nom_port'] + ':',
                  style: 'label'
                },
                {
                  width: '*',
                  text: bateau.port?.nom_port,
                  style: 'value'
                }
              ],[
                {
                  width: 'auto',
                  text: attributeNames['typeBateau.type_bat'] + ':',
                  style: 'label'
                },
                {
                  width: '*',
                  text: bateau.typeBateau?.type_bat,
                  style: 'value'
                }
              ],[
                {
                  width: 'auto',
                  text: attributeNames['client.nom_cli'] + ':',
                  style: 'label'
                },
                {
                  width: '*',
                  text: bateau.client?.nom_cli,
                  style: 'value'
                }
              ],[
                {
                  width: 'auto',
                  text: attributeNames['client.prenom_cli'] + ':',
                  style: 'label'
                },
                {
                  width: '*',
                  text: bateau.client?.prenom_cli,
                  style: 'value'
                }
              ],
              // Dynamically add other attributes
              ...Object.keys(bateau).filter(key => key !== 'id_bat' && key !== 'nom_bat' && key !== 'client'&& key !== 'port'&& key !== 'typeBateau').map(key => [
                { text: (attributeNames[key] || key.replace('_', ' ').toUpperCase()), style: 'label' },
                { text: bateau[key], style: 'value' }
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