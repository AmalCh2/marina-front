import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { AxiosService } from 'src/app/axios.service';
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
import { QuaiService } from 'src/app/shared/Service/Quai.service';
import { PElectriqueService } from 'src/app/shared/Service/PElectrique.service';
import { Quai } from 'src/app/shared/Model/Quai';
import { PElectrique } from 'src/app/shared/Model/PElectrique';
import { Emplacement } from 'src/app/shared/Model/Emplacement';
import { EmplacementService } from 'src/app/shared/Service/Emplacement.service';

@Component({
  selector: 'app-rechercher-emplacement',
  templateUrl: './rechercher-emplacement.component.html',
  styleUrls: ['./rechercher-emplacement.component.css']
})
export class RechercherEmplacementComponent implements OnInit {

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
  
    closeResult!: string;
    listQuai: any;
    quai!: Quai;
  
    listPElectrique: any;
    pElectrique!: PElectrique;
  
    emplacement!: Emplacement;
    listEmplacement: any;
  
  
  
  
    isSideNavCollapsed = false;
    screenWidth = 0;
    data: string[] = [];
  
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
      this.getAllEmplacements();
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
        };
  
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
   
  
  
  
  
  
  
  
  
    
  
    onToggleSideNav(data: SideNavToggle): void {
      this.screenWidth = data.screenWidth;
      this.isSideNavCollapsed = data.collapsed;
    }
  
    
  }