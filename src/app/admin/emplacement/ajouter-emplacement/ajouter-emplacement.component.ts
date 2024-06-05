import { Component, OnInit, Input } from '@angular/core';
import { AxiosService } from 'src/app/axios.service';
import { SideNavToggle } from '../SideNavToggle.interface';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Emplacement } from 'src/app/shared/Model/Emplacement';
import { EmplacementService } from 'src/app/shared/Service/Emplacement.service';
import { QuaiService } from 'src/app/shared/Service/Quai.service';
import { PElectriqueService } from 'src/app/shared/Service/PElectrique.service';
import { Quai } from 'src/app/shared/Model/Quai';
import { PElectrique } from 'src/app/shared/Model/PElectrique';

@Component({
  selector: 'app-ajouter-emplacement',
  templateUrl: './ajouter-emplacement.component.html',
  styleUrls: ['./ajouter-emplacement.component.css']
})
export class AjouterEmplacementComponent implements OnInit {
  @Input() screenWidthh = 0;
  @Input() collapsed = false;

  isSideNavCollapsed = false;
  screenWidth = 0;
  data: string[] = [];
  listEmplacement: any;
  form: boolean = false;
  emplacement!: Emplacement;
  closeResult!: string;
  
  listQuai: any;
  quai!: Quai;

  listPElectrique: any;
  pElectrique!: PElectrique;

  rangs: string[] = [];

  selectedQuai: any;
  onNomChange(event: any) {
    if (this.selectedQuai) {
      this.quai.rang_quai = this.selectedQuai.rang_quai;
      this.rangs = [this.selectedQuai.rang_quai];
    } else {
      this.quai.rang_quai = '';
      this.rangs = [];
    }
  }
  constructor(private axiosService: AxiosService, private emplacementService: EmplacementService, private modalService: NgbModal , private quaiService: QuaiService, private p_electriqueService: PElectriqueService) {
  }

  ngOnInit(): void {
    this.axiosService.request(
      "GET",
      "/messages",
      null
    ).then(
      (response) => this.data = response.data
    );
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
    pelectrique: null,
    quai: null,

    }
    this.getAllQuais();
    this.quai = {
      id_quai: null,
      desig_quai: null,
      rang_quai: null,
      }

      this.getAllPElectriques();

    this.pElectrique = {
      id_p_elec: null,
      designation: null,
    }
  }
  getAllPElectriques() {
    this.p_electriqueService.getAllPElectriques().subscribe(res => this.listPElectrique = res)
  }
  
  getAllQuais() {
    this.quaiService.getAllQuais().subscribe(res => this.listQuai = res)
  }
  getAllEmplacements() {
    this.emplacementService.getAllEmplacements().subscribe(res => this.listEmplacement = res)
  }
  
  addEmplacement() {
    console.log(this.emplacement);
    this.emplacementService.addEmplacement(this.emplacement).subscribe(() => {
      this.getAllEmplacements();
      //this.form = false;
    });
  }
  
  editEmplacement(emplacement: Emplacement) {
    this.emplacementService.editEmplacement(emplacement).subscribe();
  }
  
  deleteEmplacement(idEmplacement: any) {
    this.emplacementService.deleteEmplacement(idEmplacement).subscribe(() => this.getAllEmplacements())
  }
  
  open(content: any, action: any) {
    if (action != null)
      this.emplacement = action
    else
      this.emplacement = new Emplacement();
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