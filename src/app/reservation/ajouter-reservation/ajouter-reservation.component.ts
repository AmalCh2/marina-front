import { Component, OnInit, Input } from '@angular/core';
import { AxiosService } from 'src/app/axios.service';
import { SideNavToggle } from '../SideNavToggle.interface';
import { Reservation } from 'src/app/shared/Model/Reservation';
import { ReservationService } from 'src/app/shared/Service/Reservation.service';
import { TypeSejour } from 'src/app/shared/Model/TypeSejour';
import { TypeSejourService } from 'src/app/shared/Service/TypeSejour.service';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Sejour } from 'src/app/shared/Model/Sejour';

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

  listReservations: any;
  listSejours: any;
  reservation!: Reservation;
  sejour!: Sejour;
  form: boolean = false;
  Reservation!: Reservation;
  closeResult!: string;


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
