import { Component, OnInit, Input } from '@angular/core';
import { SideNavToggle } from '../SideNavToggle.interface';
import { AxiosService } from 'src/app/axios.service';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { Bateau } from '../../shared/Model/Bateau';
import { BateauService } from '../../shared/Service/Bateau.service';
import { TypeBateau } from 'src/app/shared/Model/TypeBateau';
import { TypeBateauService } from 'src/app/shared/Service/TypeBateau.service';


@Component({
  selector: 'app-ajouter-bateau',
  templateUrl: './ajouter-bateau.component.html',
  styleUrls: ['./ajouter-bateau.component.css']
})
export class AjouterBateauComponent implements OnInit {

  @Input() screenWidth = 0;
  @Input() collapsed = false;

  isSideNavCollapsed = false;
  data: string[] = [];
  totalPages = 3;
  currentPage = 1;
  paginationHTML = '';

  listBateau: any;
  form: boolean = false;
  Bateau!: Bateau;
  listTypeBateau: any;
  TypeBateau!: TypeBateau;
  closeResult!: string;


  constructor(private axiosService: AxiosService ,private BateauService: BateauService, private TypeBateauService: TypeBateauService, private modalService: NgbModal) {}

  ngOnInit(): void {
    this.axiosService.request(
      'GET',
      '/messages',
      null
    ).then(
      (response) => {
        this.data = response.data;
        this.generatePagination();
      }
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
     observation:null
    }

    this.getAllTypesBateaux();

    this.TypeBateau = {
        id_type_bat: null,
        type_bat:null,
        designation_bat:null,
        majoration_bat:null,
        multicoque:null,
    }
  }

  onToggleSideNav(data: SideNavToggle): void {
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }

  generatePagination(): void {
    this.paginationHTML = this.createPagination(this.totalPages, this.currentPage);
  }

  createPagination(totalPages: number, page: number): string {
    let liTag = '';
    let active: string;
    let beforePage = page - 1;
    let afterPage = page + 1;

    if (page > 1) {
      liTag += `<li class="btn prev" (click)="changePage(${page - 1})"><span><i class="fas fa-angle-left"></i> Prev</span></li>`;
    }

    if (page > 2) {
      liTag += `<li class="first numb" (click)="changePage(1)"><span>1</span></li>`;
      if (page > 3) {
        liTag += `<li class="dots"><span>...</span></li>`;
      }
    }

    if (page === totalPages) {
      beforePage = beforePage - 2;
    } else if (page === totalPages - 1) {
      beforePage = beforePage - 1;
    }

    if (page === 1) {
      afterPage = afterPage + 2;
    } else if (page === 2) {
      afterPage = afterPage + 1;
    }

    for (let plength = beforePage; plength <= afterPage; plength++) {
      if (plength > totalPages) {
        continue;
      }
      if (plength === 0) {
        plength = plength + 1;
      }
      if (page === plength) {
        active = 'active';
      } else {
        active = '';
      }
      liTag += `<li class="numb ${active}" (click)="changePage(${plength})"><span>${plength}</span></li>`;
    }

    if (page < totalPages - 1) {
      if (page < totalPages - 2) {
        liTag += `<li class="dots"><span>...</span></li>`;
      }
      liTag += `<li class="last numb" (click)="changePage(${totalPages})"><span>${totalPages}</span></li>`;
    }

    if (page < totalPages) {
      liTag += `<li class="btn next" (click)="changePage(${page + 1})"><span>Next <i class="fas fa-angle-right"></i></span></li>`;
    }

    return liTag;
  }

  getPages(): number[] {
    const pages = [];
    for (let i = 1; i <= this.totalPages; i++) {
      pages.push(i);
    }
    return pages;
  }

  changePage(page: number): void {
    this.currentPage = page;
    this.generatePagination(); // Appel pour régénérer la pagination
  }

  getBodyClass(): string {
    let styleClass = '';
    if (this.collapsed && this.screenWidth > 768){
      styleClass = 'body-trimmed';
    } else if (this.collapsed && this.screenWidth <= 768 && this.screenWidth > 0){
      styleClass = 'body-md-screen';
    }
    return styleClass;
  }


  
  getAllBateaux() {
    this.BateauService.getAllBateaux().subscribe(res => this.listBateau = res)
  }

  addBateau(p: any) {
    this.BateauService.addBateau(p).subscribe(() => {
      this.getAllBateaux();
      this.form = false;
    });
  }

  editBateau(Bateau: Bateau) {
    this.BateauService.editBateau(Bateau).subscribe();
  }

  deleteBateau(idBateau: any) {
    this.BateauService.deleteBateau(idBateau).subscribe(() => this.getAllBateaux())
  }

  getAllTypesBateaux() {
    this.TypeBateauService.getAllTypeBateau().subscribe(res => this.listTypeBateau = res)
  }

  addTypeBateau(p: any) {
    this.TypeBateauService.addTypeBateau(p).subscribe(() => {
      this.getAllTypesBateaux();
      this.form = false;
    });
  }

  editTypeBateau(TypeBateau: TypeBateau) {
    this.TypeBateauService.editTypeBateau(TypeBateau).subscribe();
  }

  deleteTypeBateau(idTypeBateau: any) {
    this.TypeBateauService.deleteTypeBateau(idTypeBateau).subscribe(() => this.getAllTypesBateaux())
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


}
