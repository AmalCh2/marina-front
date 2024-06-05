import { Component, OnInit, Input } from '@angular/core';
import { AxiosService } from 'src/app/axios.service';
import { SideNavToggle } from '../../SideNavToggle.interface';
import { Consommation } from 'src/app/shared/Model/Consommation';
import { ConsommationService } from 'src/app/shared/Service/Consommation.service';
import { SejourService } from 'src/app/shared/Service/Sejour.service';
import { Sejour } from 'src/app/shared/Model/Sejour';
import { BateauService } from 'src/app/shared/Service/Bateau.service';
import { Bateau } from 'src/app/shared/Model/Bateau';
import { Facture } from 'src/app/shared/Model/Facture';
import { FactureService } from 'src/app/shared/Service/Facture.service';
import { Reglement } from 'src/app/shared/Model/Reglement';
import { ReglementService } from 'src/app/shared/Service/Reglement.service';
import { Carte } from 'src/app/shared/Model/Carte';
import { CarteService } from 'src/app/shared/Service/Carte.service';


@Component({
  selector: 'app-ajouter-facture',
  templateUrl: './ajouter-facture.component.html',
  styleUrls: ['./ajouter-facture.component.css']
})
export class AjouterFactureComponent implements OnInit {

  @Input() screenWidthh = 0;
  @Input() collapsed = false;

  isSideNavCollapsed = false;
  screenWidth = 0;
  data: string[] = [];

  listFacture: any;
  form: boolean = false;
  facture!: Facture;
  closeResult!: string;

 

  

  constructor(private axiosService: AxiosService,
    private factureService: FactureService, 
  
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
    console.log(this.facture);   
    this.factureService.addFacture(this.facture).subscribe(() => {
      this.getAllFactures();
    });
  }
  
  editReglementCarteAndFacture( facture: Facture) {
   
    this.factureService.editFacture(facture).subscribe(() => {
      this.getAllFactures();
    });
  }
  
  deleteReglementCarteAndFacture( id_facture: number) {
   
    this.factureService.deleteFacture(id_facture).subscribe(() => {
      this.getAllFactures();
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