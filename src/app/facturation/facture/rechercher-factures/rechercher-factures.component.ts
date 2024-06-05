import { Component, OnInit, Input } from '@angular/core';
import { AxiosService } from 'src/app/axios.service';
import { SideNavToggle } from '../../SideNavToggle.interface';
import { ElementRef, ViewChild } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Facture } from 'src/app/shared/Model/Facture';
import { FactureService } from 'src/app/shared/Service/Facture.service';
import { Reglement } from 'src/app/shared/Model/Reglement';
import { ReglementService } from 'src/app/shared/Service/Reglement.service';
import { Carte } from 'src/app/shared/Model/Carte';
import { CarteService } from 'src/app/shared/Service/Carte.service';
import * as pdfMake from 'pdfmake/build/pdfMake'
import * as pdfFonts from 'pdfmake/build/vfs_fonts'
( pdfMake as any ).vfs= pdfFonts.pdfMake.vfs;


@Component({
  selector: 'app-rechercher-factures',
  templateUrl: './rechercher-factures.component.html',
  styleUrls: ['./rechercher-factures.component.css']
})
export class RechercherFacturesComponent implements OnInit {

  @Input() screenWidthh = 0;
  @Input() collapsed = false;

  isSideNavCollapsed = false;
  screenWidth = 0;
  data: string[] = [];
  
  listFacture: any;
  form: boolean = false;
  facture!: Facture;
  closeResult!: string;

  listReglement: any;
  reglement!: Reglement;

  listCarte: any;
  carte!: Carte;

  constructor(private axiosService: AxiosService,
    private factureService: FactureService, 
    private modalService: NgbModal,  
  ) {}

  ngOnInit(): void {
    this.axiosService.request(
      "GET",
      "/messages",
      null
    ).then(
      (response) => this.data = response.data
    );

    this.getAllFactures();

    this.facture = {
      id_fact:null,
    date_fact: null,
    etat_paiement: null,
    montant_ttl: null,
    exo_cli: null,
    lib_exo: null,
    tbre_fiscale: null,
    lib_carte: null,
    cpt_carte: null,
  };

  

  

  }



  getAllFactures() {
    this.factureService.getAllFactures().subscribe(res => this.listFacture = res);
  }
  
  
  
  addFacture() {
    this.factureService.addFacture(this.facture).subscribe(() => {
      this.getAllFactures();
    });
    
  }
  
  editFacture(facture: Facture) {
    this.factureService.editFacture(facture).subscribe(() => {
      this.getAllFactures();
    });
    
  }
  
  deleteFacture(id_facture: number) {
    this.factureService.deleteFacture(id_facture).subscribe(() => {
      this.getAllFactures();
    });
    
  }

  printFacture(facture: any) {
    // Mapping for attribute names
    const attributeNames: { [key: string]: string } = {
      id_fact: 'N° du facture',
      date_fact:'Date de facturation' ,
      etat_paiement: 'État de paiement',
      montant_ttl: 'Montant total',
      exo_cli: 'Exonération du client',
      lib_exo: 'Libellé exonération',
      tbre_fiscale: 'imbre fiscal',
      lib_carte: 'Libellé de la carte',
      cpt_carte: 'Compte de carte '
    };
  
    let docDefinition: any = {
      content: [
        { text: 'Information du facture', style: 'header' },
        {
          columns: [
            {
              width: 'auto',
              text: attributeNames['id_fact'] + ':',
              style: 'label'
            },
            {
              width: '*',
              text: facture.id_fact,
              style: 'value'
            }
          ]
        }, {
          columns: [
            {
              width: 'auto',
              text: attributeNames['lib_carte'] + ':',
              style: 'label'
            },
            {
              width: '*',
              text: facture.lib_carte,
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
              ],
              // Dynamically add other attributes
              ...Object.keys(facture).filter(key => key !== 'id_fact' &&  key !== 'lib_carte').map(key => [
                { text: (attributeNames[key] || key.replace('_', ' ').toUpperCase()), style: 'label' },
                { text: facture[key], style: 'value' }
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




  open(content: any, action: any) {
    if (action != null)
      this.facture = action
    else
      this.facture = new Facture();
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







  onToggleSideNav(data: SideNavToggle): void {
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
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