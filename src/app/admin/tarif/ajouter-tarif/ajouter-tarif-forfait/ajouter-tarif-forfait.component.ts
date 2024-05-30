import { Component, OnInit, Input } from '@angular/core';
import { SideNavToggle } from '../../../SideNavToggle.interface';
import { AxiosService } from 'src/app/axios.service';
import { Tarif } from 'src/app/shared/Model/Tarif';
import { TarifService } from 'src/app/shared/Service/Tarif.service';
import { Periode } from 'src/app/shared/Model/Periode';
import { PeriodeService } from 'src/app/shared/Service/Periode.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TarifForfait } from 'src/app/shared/Model/TarifForfait';
import { TarifForfaitService } from 'src/app/shared/Service/TarifForfait.service';

@Component({
  selector: 'app-ajouter-tarif-forfait',
  templateUrl: './ajouter-tarif-forfait.component.html',
  styleUrls: ['./ajouter-tarif-forfait.component.css']
})
export class AjouterTarifForfaitComponent implements OnInit {
  @Input() screenWidthh = 0;
  @Input() collapsed = false;

  isSideNavCollapsed = false;
  screenWidth = 0;
  data: string[] = [];

  listTarifForfaits: any;
  listTarifs: any;
  listPeriodes: any;
  tarifForfait!: TarifForfait;
  tarif!: Tarif;
  periode!: Periode;
  

  constructor(private axiosService: AxiosService,
    private tarifService: TarifService,
    private periodeService: PeriodeService,
    private tarifForfaitService: TarifForfaitService,
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
    this.getAllPeriodes();
    this.getAllTarifForfaits();

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

    this.periode = {
      id_periode:null,
      deb_periode: null,
      fin_periode:null,
      id_tarif: null,
    };

    this.tarifForfait = {
    id_tarif_forfait: null,
    annee: null,
    type: null,
    longueur_bat: null,
    largeur_bat: null,
    id_prest: null,
  }
  }

  getAllTarifs() {
    this.tarifService.getAllTarifs().subscribe(res => this.listTarifs = res);
  }

  getAllPeriodes() {
    this.periodeService.getAllPeriodes().subscribe(res => this.listPeriodes = res);
  }

  getAllTarifForfaits() {
    this.tarifForfaitService.getAllTarifForfaits().subscribe(res => this.listTarifForfaits = res);
  }

  addTarifAndOthers() {
    this.tarifService.addTarif(this.tarif).subscribe(() => {
      this.getAllTarifs();
    });
    this.periodeService.addPeriode(this.periode).subscribe(() => {
      this.getAllPeriodes();
    });
    this.tarifForfaitService.addTarifForfait(this.tarifForfait).subscribe(() => {
      this.getAllTarifForfaits();
    });
  }

  editTarifAndOthers(tarif: Tarif, periode: Periode, tarifForfait: TarifForfait) {
    this.tarifService.editTarif(tarif).subscribe(() => {
      this.getAllTarifs();
    });
    this.periodeService.editPeriode(periode).subscribe(() => {
      this.getAllPeriodes();
    });
    this.tarifForfaitService.editTarifForfait(tarifForfait).subscribe(() => {
      this.getAllTarifForfaits();
    });
  }

  deleteTarifAndOthers(id_tarif: number, id_periode: number, id_tarif_forfait: number) {
    this.tarifService.deleteTarif(id_tarif).subscribe(() => {
      this.getAllTarifs();
    });
    this.periodeService.deletePeriode(id_periode).subscribe(() => {
      this.getAllPeriodes();
    });
    this.tarifForfaitService.deleteTarifForfait(id_tarif_forfait).subscribe(() => {
      this.getAllTarifForfaits();
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
