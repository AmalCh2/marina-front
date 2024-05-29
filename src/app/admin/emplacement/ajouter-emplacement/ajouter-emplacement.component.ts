import { Component, OnInit, Input } from '@angular/core';
import { AxiosService } from 'src/app/axios.service';
import { SideNavToggle } from '../SideNavToggle.interface';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Emplacement } from 'src/app/shared/Model/Emplacement';
import { EmplacementService } from 'src/app/shared/Service/Emplacement.service';

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
  

  constructor(private axiosService: AxiosService, private emplacementService: EmplacementService, private modalService: NgbModal) {
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
    tel_port: null,
    nbr_mouillage_emp: null,
    type_cord_emp: null,
    commentaire: null,
    rang: null,
    blockage: null,
    direction_emp: null,
    id_pelectrique: null,
    id_quai: null,
    desig_quai:null,
    rang_quai:null,

    }
  }

  getAllEmplacements() {
    this.emplacementService.getAllEmplacements().subscribe(res => this.listEmplacement = res);
  }

  addEmplacement(e: any) {
    this.emplacementService.addEmplacement(e).subscribe(() => {
      this.getAllEmplacements();
      this.form = false;
    });
  }

  editEmplacement(emplacement: Emplacement) {
    this.emplacementService.editEmplacement(emplacement).subscribe();
  }

  deleteEmplacement(idEmplacement: any) {
    this.emplacementService.deleteEmplacement(idEmplacement).subscribe(() => this.getAllEmplacements());
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
