import { Component, OnInit, Input  } from '@angular/core';
import { SideNavToggle } from '../SideNavToggle.interface';
import { AxiosService } from '../../axios.service';
import { ElementRef, ViewChild } from '@angular/core';
import { Sejour } from 'src/app/shared/Model/Sejour';
import { TypeSejour } from 'src/app/shared/Model/TypeSejour';
import { SejourService } from 'src/app/shared/Service/Sejour.service';
import { TypeSejourService } from 'src/app/shared/Service/TypeSejour.service';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Tarif } from 'src/app/shared/Model/Tarif';
import { Emplacement } from 'src/app/shared/Model/Emplacement';
import { Bateau } from 'src/app/shared/Model/Bateau';
import { TarifService } from 'src/app/shared/Service/Tarif.service';
import { EmplacementService } from 'src/app/shared/Service/Emplacement.service';
import { BateauService } from 'src/app/shared/Service/Bateau.service';
import * as pdfMake from 'pdfmake/build/pdfMake'
import * as pdfFonts from 'pdfmake/build/vfs_fonts'

@Component({
  selector: 'app-rechercher-sejour',
  templateUrl: './rechercher-sejour.component.html',
  styleUrls: ['./rechercher-sejour.component.css']
})
export class RechercherSejourComponent implements OnInit {

  @Input() screenWidthh = 0;
  @Input() collapsed = false;

  isSideNavCollapsed = false;
  screenWidth = 0;
  data: string[] = [];
  totalPages: number = 3;
  currentPage: number = 1;
  paginationHTML: string = '';
  
  form: boolean = false;
  closeResult!: string;

  listTarif: any;
  tarif!: Tarif;

  listTypeSejour: any;
  typeSejour!: TypeSejour;

  listSejour: any;
  sejour!: Sejour;

  listEmplacement: any;
  emplacement!: Emplacement;

  listBateau: any;
  bateau!: Bateau;

  constructor(private axiosService: AxiosService,
    private sejourService: SejourService,
    private tarifService: TarifService,
    private emplacementService: EmplacementService,
    private bateauService: BateauService,
    private typeSejourService: TypeSejourService,
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

    this.getAllSejour();
    this.sejour = {
    id_sej:  null,
    deb_sej:  null,
    fin_sej:  null,
    num_jours:  null,

    tarif:  null,
    type_sej:  null,
    emp:  null,
    bat:  null,
    };

    this.getAllTypeSejour();
    this.typeSejour = {
      id_type_sej: null,
      lib_sej: null,
      sej_majoration: null,
  };

  this.getAllEmplacement();
    this.emplacement = {
      id_emp: null,
    largeur_emp: null,
    longueur_emp: null,
    tirant_eau_emp: null,
    nbr_mouillage_emp: null,
    type_cord_emp: null,
    commentaire: null,
    rang: null,
    blockage: null,
    direction_emp: null,
    pelectrique:null,
    quai: null,
  };

  this.getAllBateau();

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
    };

    this.getAllTarif();
    this.tarif = {
      id_tarif: null,
    annee: null,
    type_tarif: null,
    largeur_bat: null,
    longueur_bat: null,
    tarif_hivernage: null,
    tarif_annuel: null,
    jour_hs:null,
    jour_ms:null,
    jour_bs:null,
    mois_hs:null,
    mois_ms:null,
    mois_bs:null,
  };
  }

  getAllTarif() {
    this.tarifService.getAllTarifs().subscribe(res => this.listTarif = res);
  }

  getAllBateau() {
    this.bateauService.getAllBateaux().subscribe(res => this.listBateau = res);
  }

  getAllEmplacement() {
    this.emplacementService.getAllEmplacements().subscribe(res => this.listEmplacement = res);
  }

  getAllTypeSejour() {
    this.typeSejourService.getAllTypeSejours().subscribe(res => this.listTypeSejour = res);
  }

  getAllSejour() {
    this.sejourService.getAllSejours().subscribe(res => this.listSejour = res);
  }

  addSejour(s: any) {
    this.sejourService.addSejour(s).subscribe(() => {
      this.getAllSejour();
      this.form = false;
    });
  }

  editSejour(sejour: Sejour) {
    this.sejourService.editSejour(sejour).subscribe();
  }

  deleteSejour(idSejour: any) {
    this.sejourService.deleteSejour(idSejour).subscribe(() => this.getAllSejour());
  }

  archiveSejour(id: number): void {
    this.sejourService.archiveSejour(id).subscribe(
      () => {
        console.log('Sejour archived');
        this.getAllSejour();
      }
    );
  }



  open(content: any, action: any) {
    if (action != null)
      this.sejour = action
    else
      this.sejour = new Sejour();
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
  






  printSejour(sejour: any) {
    let docDefinition: any = {
      content: [
        { text: 'My Client', style: 'title' }, // Title element
        { text: '\n' }, // Add some space after the title
        { text: 'sejour ID: ', bold: true },
        { text: sejour.id_sej + '\n', bold: true, color: 'blue' },
        { text: 'sejour Name: ', bold: true },
        { text: sejour.lib_sej + '\n', bold: true, italic: true },
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

