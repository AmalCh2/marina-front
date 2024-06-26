import { Component, OnInit, Input } from '@angular/core';
import { SideNavToggle } from '../../../SideNavToggle.interface';
import { AxiosService } from 'src/app/axios.service';
import { Tarif } from 'src/app/shared/Model/Tarif';
import { Periode } from 'src/app/shared/Model/Periode';
import { TarifService } from 'src/app/shared/Service/Tarif.service';
import { PeriodeService } from 'src/app/shared/Service/Periode.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-ajouter-tarif-ammarage',
  templateUrl: './ajouter-tarif-ammarage.component.html',
  styleUrls: ['./ajouter-tarif-ammarage.component.css']
})
export class AjouterTarifAmmarageComponent implements OnInit {

  @Input() screenWidthh = 0;
  @Input() collapsed = false;

  isSideNavCollapsed = false;
  screenWidth = 0;
  data: string[] = [];
  listTarifs: any;
  listPeriodes: any;
  tarif!: Tarif;
  periode!: Periode;
  

  constructor(private axiosService: AxiosService, 
    private tarifService: TarifService,
    private periodeService: PeriodeService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.axiosService.request(
      "GET",
      "/messages",
      null
    ).then(
      (response) => this.data = response.data
    );
    this.getAllTarifs();
    this.tarif = {
      id_tarif: null,
    annee: null,
    type_tarif: null,
    largeur_bat: null,
    longueur_bat: null,
    tarif_hivernage: null,
    tarif_annuel: null,
    jour_hs: null,
    jour_ms: null,
    jour_bs: null,
    mois_hs: null,
    mois_ms: null,
    mois_bs: null,
    };
    this.getAllPeriodes();

    this.periode = {
      id_periode:null,
      deb_periode: null,
      fin_periode:null,
      id_tarif: null,
    };

  }



  getAllTarifs() {
    this.tarifService.getAllTarifs().subscribe(res => this.listTarifs = res);
  }

  getAllPeriodes() {
    this.periodeService.getAllPeriodes().subscribe(res => this.listPeriodes = res);
  }

  addTarifAndPeriode() {
    console.log(this.tarif);
    this.tarifService.addTarif(this.tarif).subscribe(() => {
      this.getAllTarifs();
    });
    
  }

  editTarifAndPeriode(tarif: Tarif, periode: Periode) {
    this.tarifService.editTarif(tarif).subscribe(() => {
      this.getAllTarifs();
    });
    this.periodeService.editPeriode(periode).subscribe(() => {
      this.getAllPeriodes();
    });
  }

  deleteTarifAndPeriode(id_tarif: number, id_periode: number) {
    this.tarifService.deleteTarif(id_tarif).subscribe(() => {
      this.getAllTarifs();
    });
    this.periodeService.deletePeriode(id_periode).subscribe(() => {
      this.getAllPeriodes();
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
