import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { AxiosService } from '../axios.service';
import { SideNavToggle } from './SideNavToggle.interface';
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
  selector: 'app-plan-d-eau',
  templateUrl: './plan-d-eau.component.html',
  styleUrls: ['./plan-d-eau.component.css']
})
export class PlanDEauComponent implements OnInit {

  @Input() screenWidthh= 0;
  @Input() collapsed= false;
  getBodyClass():string{
    let styleClass = '';
    if (this.collapsed && this.screenWidthh > 768){
      styleClass='body-trimmed';
    } else if (this.collapsed && this.screenWidthh <= 768 && this.screenWidthh > 0){
      styleClass = 'body-md-screen'
    }
    return styleClass;
  }

  listBateau: any;
  bateau!: Bateau;

  listClient: any;
  Client!: Client;

  listTypeBateau: any;
  TypeBateau!: TypeBateau;




  isSideNavCollapsed = false;
  screenWidth = 0;
  data: string[] = [];

  constructor(private axiosService: AxiosService,
    private BateauService: BateauService , 
    private typeBateauService: TypeBateauService , 
    private ClientService: ClientService
    , private modalService: NgbModal 


  ) {}

  ngOnInit(): void {
    this.axiosService.request(
      "GET",
      "/messages",
      null
    ).then(
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

  
}

