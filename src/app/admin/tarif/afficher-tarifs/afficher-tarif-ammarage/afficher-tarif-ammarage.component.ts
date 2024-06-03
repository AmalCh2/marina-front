

import { Component, OnInit, Input } from '@angular/core';
import { AxiosService } from 'src/app/axios.service';
import { SideNavToggle } from '../../../SideNavToggle.interface';
import { ElementRef, ViewChild } from '@angular/core';
import { Tarif } from 'src/app/shared/Model/Tarif';
import { Periode } from 'src/app/shared/Model/Periode';
import { TarifService } from 'src/app/shared/Service/Tarif.service';
import { PeriodeService } from 'src/app/shared/Service/Periode.service';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-afficher-tarif-ammarage',
  templateUrl: './afficher-tarif-ammarage.component.html',
  styleUrls: ['./afficher-tarif-ammarage.component.css']
})
export class AfficherTarifAmmarageComponent implements OnInit {

  @Input() screenWidthh = 0;
  @Input() collapsed = false;

  isSideNavCollapsed = false;
  screenWidth = 0;
  data: string[] = [];

  listTarif: any;
  tarif!: Tarif;
  closeResult!: string;

  listPeriode: any;
  periode!: Periode;
  
  constructor(private axiosService: AxiosService,
    private tarifService: TarifService, 
    private modalService: NgbModal,
    private periodeService: PeriodeService,
  ) {}


  ngOnInit(): void {
    this.axiosService.request(
      "GET",
      "/messages",
      null
    ).then(
      (response) => this.data = response.data
    );

    this.getAllPeriodes();
    this.periode = {
      id_periode: null,
    deb_periode: null,
    fin_periode: null,
    id_tarif: null,
    };

    this.getAllTarifs();
    this.tarif = {
      id_tarif: null,
    annee: null,
    type_tarif:  null,
    largeur_bat:  null,
    longueur_bat:  null,
    tarif_hivernage:  null,
    tarif_annuel:  null,
    jour_hs:  null,
    jour_ms:  null,
    jour_bs:  null,
    mois_hs:  null,
    mois_ms:  null,
    mois_bs:  null,
    };

  }

  getAllTarifs() {
    this.tarifService.getAllTarifs().subscribe(res => this.listTarif = res)
  }

  getAllPeriodes() {
    this.periodeService.getAllPeriodes().subscribe(res => this.listPeriode = res)
  }

  editTarif(tarif: Tarif) {
    this.tarifService.editTarif(tarif).subscribe();
  }
  
  deleteTarif(idTarif: any) {
    this.tarifService.deleteTarif(idTarif).subscribe(() => this.getAllTarifs());
  }

 open(content: any, action: any) {
    if (action != null)
      this.tarif = action;
    else
      this.tarif = new Tarif();
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