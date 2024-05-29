import { Component, OnInit, Input } from '@angular/core';
import { AxiosService } from 'src/app/axios.service';
import { SideNavToggle } from '../SideNavToggle.interface';
import { Reservation } from 'src/app/shared/Model/Reservation';
import { ReservationService } from 'src/app/shared/Service/Reservation.service';
import { TypeSejour } from 'src/app/shared/Model/TypeSejour';
import { TypeSejourService } from 'src/app/shared/Service/TypeSejour.service';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-ajouter-reservation',
  templateUrl: './ajouter-reservation.component.html',
  styleUrls: ['./ajouter-reservation.component.css']
})
export class AjouterReservationComponent implements OnInit {

  @Input() screenWidthh = 0;
  @Input() collapsed = false;

  isSideNavCollapsed = false;
  screenWidth = 0;
  data: string[] = [];

  listReservation: any;
  form: boolean = false;
  Reservation!: Reservation;
  closeResult!: string;

  listTypeSejour: any;
  TypeSejour!: TypeSejour;

  constructor(private axiosService: AxiosService,
    private ReservationService: ReservationService,
    private modalService: NgbModal,
    private TypeSejourService: TypeSejourService) { }

  ngOnInit(): void {
    this.axiosService.request(
      "GET",
      "/messages",
      null
    ).then(
      (response) => this.data = response.data
    );
    this.getAllReservations();
    
    this.Reservation = {
      deb_sej: null,
      fin_sej: null,
      num_jours: null,
      id_reservation: null,
      id_tarif: null,
      id_type_sej: null,
      id_emp: null,
      id_bat: null,
      nom_bat: null,
      id_cli: null,
      nom_cli: null,
    };

    this.getAllTypeSejours();

    this.TypeSejour = {
      id_type_sej: null,
      lib_sej: null,
      sej_majoration: null,
    };
  }

  




















  
  getAllReservations() {
    this.ReservationService.getAllReservations().subscribe(res => this.listReservation = res);
  }

  getAllTypeSejours() {
    this.TypeSejourService.getAllTypeSejours().subscribe(res => this.listTypeSejour = res);
  }

  addReservationAndTypeSejour() {
    this.ReservationService.addReservation(this.Reservation).subscribe(() => {
      this.getAllReservations();
    });
    this.TypeSejourService.addTypeSejour(this.TypeSejour).subscribe(() => {
      this.getAllTypeSejours();
    });
  }

  editReservationAndTypeSejour(sejour: Reservation, typeSejour: TypeSejour) {
    this.ReservationService.editReservation(Reservation).subscribe(() => {
      this.getAllReservations();
    });
    this.TypeSejourService.editTypeSejour(typeSejour).subscribe(() => {
      this.getAllTypeSejours();
    });
  }

  deleteReservationAndTypeSejour(id_reservation: number, id_type_sejour: number) {
    this.ReservationService.deleteReservation(id_reservation).subscribe(() => {
      this.getAllReservations();
    });
    this.TypeSejourService.deleteTypeSejour(id_type_sejour).subscribe(() => {
      this.getAllTypeSejours();
    });
  }




























  cancel() {
    this.form = false;
  }

  onToggleSideNav(data: SideNavToggle): void {
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }

  getBodyClass(): string {
    let styleClass = '';
    if (this.collapsed && this.screenWidthh > 768) {
      styleClass = 'body-trimmed';
    } else if (this.collapsed && this.screenWidthh <= 768 && this.screenWidthh > 0) {
      styleClass = 'body-md-screen';
    }
    return styleClass;
  }
}
