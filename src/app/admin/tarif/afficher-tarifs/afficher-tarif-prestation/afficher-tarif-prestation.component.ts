import { Component, OnInit, Input } from '@angular/core';
import { AxiosService } from 'src/app/axios.service';
import { SideNavToggle } from '../../../SideNavToggle.interface';
import { ElementRef, ViewChild } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Prestation } from 'src/app/shared/Model/Prestation';
import { Nature } from 'src/app/shared/Model/Nature';
import { TypePrestation } from 'src/app/shared/Model/TypePrestation';
import { PrestationService } from 'src/app/shared/Service/Prestation.service';
import { TypePrestationService } from 'src/app/shared/Service/TypePrestation.service';
import { NatureService } from 'src/app/shared/Service/Nature.service';
import { Tva } from 'src/app/shared/Model/Tva';
import { TvaService } from 'src/app/shared/Service/Tva.service';

@Component({
  selector: 'app-afficher-tarif-prestation',
  templateUrl: './afficher-tarif-prestation.component.html',
  styleUrls: ['./afficher-tarif-prestation.component.css']
})
export class AfficherTarifPrestationComponent implements OnInit {

  @Input() screenWidthh = 0;
  @Input() collapsed = false;

  isSideNavCollapsed = false;
  screenWidth = 0;
  data: string[] = [];

  listPrestation: any;
  prestation!: Prestation;
  closeResult!: string;

  listTva: any;
  Tva!: Tva;
  
  listNature: any;
  Nature!: Nature;

  listTypePrestation: any;
  TypePrestation!: TypePrestation;
  form: boolean = false;

  constructor(private axiosService: AxiosService,
    private prestationService: PrestationService, 
    private typePrestationService: TypePrestationService, 
    private natureService: NatureService,
    private modalService: NgbModal,
    private tvaService: TvaService,
  ) {}

  ngOnInit(): void {
    this.axiosService.request(
      "GET",
      "/messages",
      null
    ).then(
      (response) => this.data = response.data
    );
    this.getAllNatures();
    this.Nature = {
      id_nature: null,
      lib_nature: null,
      
    };

    this.getAllTypePrestations();
        this.TypePrestation = {
          id_type_prest: null,
          lib_type_prest: null,
          rang_type_prest: null,
      
    };

    this.getAllPrestations();

    this.prestation = {
      id_prest: null,
    lib_prest: null,
    prix_unit_prest: null,
    secteur_prest: null,
    rang_prest:null,
    tva:null,
    type_prest: null,
    nature:null,
    }

    this.getAllTva();

    this.Tva = {
      id_tva: null,
    taux_tva: null,
    cpt_tva: null,
    date_tva: null,
    }
  }

  getAllNatures() {
    this.natureService.getAllNatures().subscribe(res => this.listNature = res)
  }

  getAllPrestations() {
    this.prestationService.getAllPrestations().subscribe(res => this.listPrestation = res)
  }

  getAllTypePrestations() {
    this.typePrestationService.getAllTypePrestations().subscribe(res => this.listTypePrestation = res)
    
  }

  getAllTva() {
    this.tvaService.getAllTvas().subscribe(res => this.listTva = res)
    
  }

  editPrestation(prestation: Prestation) {
    this.prestationService.editPrestation(prestation).subscribe();
  }
  
  deletePrestation(idPrestation: any) {
    this.prestationService.deletePrestation(idPrestation).subscribe(() => this.getAllPrestations());
  }
  

  open(content: any, action: any) {
    if (action != null)
      this.prestation = action;
    else
      this.prestation = new Prestation();
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
