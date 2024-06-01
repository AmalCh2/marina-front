import { Component, OnInit, Input } from '@angular/core';
import { SideNavToggle } from '../SideNavToggle.interface';
import { AxiosService } from '../../axios.service';
import { Sejour } from 'src/app/shared/Model/Sejour';
import { TypeSejour } from 'src/app/shared/Model/TypeSejour';
import { SejourService } from 'src/app/shared/Service/Sejour.service';
import { TypeSejourService } from 'src/app/shared/Service/TypeSejour.service';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-fiche-sejour-modifier',
  templateUrl: './fiche-sejour-modifier.component.html',
  styleUrls: ['./fiche-sejour-modifier.component.css']
})
export class FicheSejourModifierComponent implements OnInit {

  @Input() screenWidthh = 0;
  @Input() collapsed = false;

  isSideNavCollapsed = false;
  screenWidth = 0;
  data: string[] = [];
  totalPages: number = 3;
  currentPage: number = 1;
  paginationHTML: string = '';

  form: boolean = false;
  closeResult!: string;
  listSejours: any;
  listTypeSejours: any;
  sejour!: Sejour;
  typeSejour!: TypeSejour;

  constructor(private axiosService: AxiosService,
    private sejourService: SejourService,
    private typeSejourService: TypeSejourService,
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
    this.generatePagination();
    this.getAllSejours();
    
    this.sejour = {
      id_sej:  null,
    deb_sej:  null,
    fin_sej:  null,
    num_jours:  null,
    
    tarif:  null,
    type_sej:  null,
    emp:  null,
    bat:  null,
    };

    this.getAllTypeSejours();

    

    this.typeSejour = {
      id_type_sej: null,
      lib_sej: null,
      sej_majoration: null,
  };
  }




  
  getAllSejours() {
    this.sejourService.getAllSejours().subscribe(res => this.listSejours = res);
  }

  getAllTypeSejours() {
    this.typeSejourService.getAllTypeSejours().subscribe(res => this.listTypeSejours = res);
  }

  addSejourAndTypeSejour() {
    this.sejourService.addSejour(this.sejour).subscribe(() => {
      this.getAllSejours();
    });
    this.typeSejourService.addTypeSejour(this.typeSejour).subscribe(() => {
      this.getAllTypeSejours();
    });
  }

  editSejourAndTypeSejour(sejour: Sejour, typeSejour: TypeSejour) {
    this.sejourService.editSejour(sejour).subscribe(() => {
      this.getAllSejours();
    });
    this.typeSejourService.editTypeSejour(typeSejour).subscribe(() => {
      this.getAllTypeSejours();
    });
  }

  deleteSejourAndTypeSejour(id_sejour: number, id_type_sejour: number) {
    this.sejourService.deleteSejour(id_sejour).subscribe(() => {
      this.getAllSejours();
    });
    this.typeSejourService.deleteTypeSejour(id_type_sejour).subscribe(() => {
      this.getAllTypeSejours();
    });
  }







  onToggleSideNav(data: SideNavToggle): void {
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }

  generatePagination(): void {
    this.paginationHTML = this.createPagination(this.totalPages, this.currentPage);
  }

  createPagination(totalPages: number, page: number): string {
    let liTag: string = '';
    let active: string;
    let beforePage: number = page - 1;
    let afterPage: number = page + 1;

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
        active = "active";
      } else {
        active = "";
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
    if (this.collapsed && this.screenWidthh > 768){
      styleClass='body-trimmed';
    } else if (this.collapsed && this.screenWidthh <= 768 && this.screenWidthh > 0){
      styleClass = 'body-md-screen';
    }
    return styleClass;
  }

}
