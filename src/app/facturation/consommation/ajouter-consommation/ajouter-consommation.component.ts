import { Component, OnInit, Input } from '@angular/core';
import { SideNavToggle } from '../../SideNavToggle.interface';
import { AxiosService } from 'src/app/axios.service';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Consommation } from 'src/app/shared/Model/Consommation';
import { ConsommationService } from 'src/app/shared/Service/Consommation.service';

@Component({
  selector: 'app-ajouter-consommation',
  templateUrl: './ajouter-consommation.component.html',
  styleUrls: ['./ajouter-consommation.component.css']
})
export class AjouterConsommationComponent implements OnInit {
  @Input() screenWidthh = 0;
  @Input() collapsed = false;

  isSideNavCollapsed = false;
  screenWidth = 0;
  data: string[] = [];

  listConsommation: any;
  form: boolean = false;
  consommation!: Consommation;
  closeResult!: string;


  constructor(private axiosService: AxiosService, private consommationService: ConsommationService, private modalService: NgbModal) {
  }


  ngOnInit(): void {
    this.axiosService.request(
      "GET",
      "/messages",
      null
    ).then(
      (response) => this.data = response.data
    );
    this.getAllConsommation();

    this.consommation = {
      id_cons: null,
    prix_unit: null,
    qte: null,
    deb_cons: null,
    fin_cons: null,
    date_sys: null,
    offre: null,
    id_fact: null,
    id_prest: null,
    id_sej: null,
  }
  }

  getAllConsommation() {
    this.consommationService.getAllConsommations().subscribe(res => this.listConsommation = res);
  }

  addConsommation(c: any) {
    this.consommationService.addConsommation(c).subscribe(() => {
      this.getAllConsommation();
      this.form = false;
    });
  }

  editConsommation(consommation: Consommation) {
    this.consommationService.editConsommation(consommation).subscribe();
  }

  deleteConsommation(idConsommation: any) {
    this.consommationService.deleteConsommation(idConsommation).subscribe(() => this.getAllConsommation());
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

