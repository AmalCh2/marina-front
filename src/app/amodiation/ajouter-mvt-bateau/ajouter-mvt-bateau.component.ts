import { Component, OnInit, Input } from '@angular/core';
import { SideNavToggle } from '../SideNavToggle.interface';
import { AxiosService } from 'src/app/axios.service';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Bateau } from '../../shared/Model/Bateau';
import { BateauService } from '../../shared/Service/Bateau.service';
import { EmplacementService } from 'src/app/shared/Service/Emplacement.service';
import { Emplacement } from 'src/app/shared/Model/Emplacement';

@Component({
  selector: 'app-ajouter-mvt-bateau',
  templateUrl: './ajouter-mvt-bateau.component.html',
  styleUrls: ['./ajouter-mvt-bateau.component.css']
})
export class AjouterMvtBateauComponent implements OnInit {
  @Input() screenWidthh = 0;
  @Input() collapsed = false;

  isSideNavCollapsed = false;
  screenWidth = 0;
  data: string[] = [];

  listBateau: any;
  form: boolean = false;
  Bateau!: Bateau;

  listEmplacement: any;
  emplacement!: Emplacement;

  constructor(private axiosService: AxiosService ,private BateauService: BateauService, private modalService: NgbModal,private emplacementService: EmplacementService) {}

  ngOnInit(): void {
    this.axiosService.request(
      "GET",
      "/messages",
      null
    ).then(
      (response) => this.data = response.data
    );

    this.getAllBateaux();

    this.Bateau = {
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
  }

  getAllEmplacement() {
    this.emplacementService.getAllEmplacements().subscribe(res => this.listEmplacement = res);
  }

  getAllBateaux() {
    this.BateauService.getAllBateaux().subscribe(res => this.listBateau = res)
  }

  addBateau(b: any) {
    this.BateauService.addBateau(b).subscribe(() => {
      this.getAllBateaux();
      this.form = false;
    });
  }

  editBateau(bateau: Bateau) {
    this.BateauService.editBateau(bateau).subscribe();
  }

  deleteBateau(idBateau: any) {
    this.BateauService.deleteBateau(idBateau).subscribe(() => this.getAllBateaux());
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
