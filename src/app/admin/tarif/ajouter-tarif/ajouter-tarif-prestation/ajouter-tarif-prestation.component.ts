import { Component, OnInit, Input } from '@angular/core';
import { SideNavToggle } from '../../../SideNavToggle.interface';
import { AxiosService } from 'src/app/axios.service';
import { Prestation } from 'src/app/shared/Model/Prestation';
import { Tva } from 'src/app/shared/Model/Tva';
import { Nature } from 'src/app/shared/Model/Nature';
import { TypePrestation } from 'src/app/shared/Model/TypePrestation';
import { PrestationService } from 'src/app/shared/Service/Prestation.service';
import { TvaService } from 'src/app/shared/Service/Tva.service';
import { NatureService } from 'src/app/shared/Service/Nature.service';
import { TypePrestationService } from 'src/app/shared/Service/TypePrestation.service';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-ajouter-tarif-prestation',
  templateUrl: './ajouter-tarif-prestation.component.html',
  styleUrls: ['./ajouter-tarif-prestation.component.css']
})
export class AjouterTarifPrestationComponent implements OnInit {
  @Input() screenWidthh = 0;
  @Input() collapsed = false;

  isSideNavCollapsed = false;
  screenWidth = 0;
  data: string[] = [];

  listPrestations: any;
  listTvas: any;
  listNatures: any;
  listTypePrestations: any;
  prestation!: Prestation;
  tva!: Tva;
  nature!: Nature;
  typePrestation!: TypePrestation;
  closeResult!: string;

  rangs: String[] = [];

  selectedTypePrestation: any;
  onNomChange(event: any) {
    if (this.selectedTypePrestation) {
      this.typePrestation.rang_type_prest = this.selectedTypePrestation.rang_type_prest;
      this.rangs = [this.selectedTypePrestation.rang_type_prest];
    } else {
      this.typePrestation.rang_type_prest = '';
      this.rangs = [];
    }
  }

  constructor(
    private prestationService: PrestationService,
    private tvaService: TvaService,
    private natureService: NatureService,
    private typePrestationService: TypePrestationService,
    private modalService: NgbModal,
    private axiosService: AxiosService
  ) {}


  ngOnInit(): void {
    this.axiosService.request(
      "GET",
      "/messages",
      null
    ).then(
      (response) => this.data = response.data
    );
    this.getAllPrestations();
    this.getAllTvas();
    this.getAllNatures();
    this.getAllTypePrestations();

    this.prestation = {
      id_prest: null,
    lib_prest:null,
    prix_unit_prest:null,
    secteur_prest:null,
    rang_prest: null,
    tva: null,
    type_prest: null,
    nature: null,
    };

    this.tva = {
      id_tva: null,
    taux_tva: null,
    cpt_tva: null,
    date_tva: null,
    };

    this.nature = {
      id_nature: null,
    lib_nature: null,
    };

    this.typePrestation = {
      id_type_prest: null,
    lib_type_prest: null,
    rang_type_prest: null,
    };
  }




 

  getAllNatures() {
    this.natureService.getAllNatures().subscribe(res => this.listNatures = res);
  }

  getAllTypePrestations() {
    this.typePrestationService.getAllTypePrestations().subscribe(res => this.listTypePrestations = res);
  }

  
  getAllPrestations() {
    this.prestationService.getAllPrestations().subscribe(res => this.listPrestations = res);
  }

  getAllTvas() {
    this.tvaService.getAllTvas().subscribe(res => this.listTvas = res);
  }

  addPrestationAndTva() {
    this.prestationService.addPrestation(this.prestation).subscribe(() => {
      this.getAllPrestations();
    });
    this.tvaService.addTva(this.tva).subscribe(() => {
      this.getAllTvas();
    });
  }

  editPrestationAndTva(prestation: Prestation, tva: Tva) {
    this.prestationService.editPrestation(prestation).subscribe(() => {
      this.getAllPrestations();
    });
    this.tvaService.editTva(tva).subscribe(() => {
      this.getAllTvas();
    });
  }

  deletePrestationAndTva(id_prestation: number, id_tva: number) {
    this.prestationService.deletePrestation(id_prestation).subscribe(() => {
      this.getAllPrestations();
    });
    this.tvaService.deleteTva(id_tva).subscribe(() => {
      this.getAllTvas();
    });
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
