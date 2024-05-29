import { Component, OnInit,Input } from '@angular/core';
import { SideNavToggle } from '../SideNavToggle.interface';
import { AxiosService } from '../../axios.service';
import { Sejour } from 'src/app/shared/Model/Sejour';
import { TypeSejour } from 'src/app/shared/Model/TypeSejour';
import { SejourService } from 'src/app/shared/Service/Sejour.servicz';
import { TypeSejourService } from 'src/app/shared/Service/TypeSejour.service';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-ajouter-sejour',
  templateUrl: './ajouter-sejour.component.html',
  styleUrls: ['./ajouter-sejour.component.css']
})
export class AjouterSejourComponent implements OnInit {
  @Input() screenWidthh = 0;
  @Input() collapsed = false;

  isSideNavCollapsed = false;
  screenWidth = 0;
  data: string[] = [];

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
    this.getAllSejours();
    
    this.sejour = {
      id_sej:  null,
    deb_sej:  null,
    fin_sej:  null,
    num_jours:  null,

    id_reservation:  null,
    id_tarif:  null,
    id_type_sej:  null,
    id_emp:  null,
    id_bat:  null,
    nom_bat:  null,
    id_cli:  null,
    nom_cli:  null,
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
