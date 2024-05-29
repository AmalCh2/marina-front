import { Component, OnInit, Input } from '@angular/core';
import { AxiosService } from 'src/app/axios.service';
import { SideNavToggle } from '../../../SideNavToggle.interface';
import { ElementRef, ViewChild } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-afficher-tarif-prestation',
  templateUrl: './afficher-tarif-prestation.component.html',
  styleUrls: ['./afficher-tarif-prestation.component.css']
})
export class AfficherTarifPrestationComponent implements OnInit {

  @Input() screenWidthh = 0;
  @Input() collapsed = false;

  isSideNavCollapsed = false;
  screenWidth = 0;
  data: string[] = [];

  constructor(private axiosService: AxiosService) {}

  ngOnInit(): void {
    this.axiosService.request(
      "GET",
      "/messages",
      null
    ).then(
      (response) => this.data = response.data
    );
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


  @ViewChild('section') section!: ElementRef;
  @ViewChild('overlay') overlay!: ElementRef;

  showModal() {
    this.section.nativeElement.classList.add('active');
    this.overlay.nativeElement.classList.add('active');
  }

  hideModal() {
    this.section.nativeElement.classList.remove('active');
    this.overlay.nativeElement.classList.remove('active');
  }

  closeOverlay() {
    this.hideModal();
  }

  prestations: any[] = [
    { num_prest: 1, prix: 100, type: ' typeprest', seteur: 'secteur', nature: 'nature' },
    { num_prest: 2, prix: 100, type: ' typeprest', seteur: 'secteur', nature: 'nature' },
    { num_prest: 2, prix: 100, type: ' typeprest', seteur: 'secteur', nature: 'nature' },
    { num_prest: 2, prix: 100, type: ' typeprest', seteur: 'secteur', nature: 'nature' },
    { num_prest: 2, prix: 100, type: ' typeprest', seteur: 'secteur', nature: 'nature' },
    { num_prest: 2, prix: 100, type: ' typeprest', seteur: 'secteur', nature: 'nature' },
    { num_prest: 2, prix: 100, type: ' typeprest', seteur: 'secteur', nature: 'nature' },
    { num_prest: 2, prix: 100, type: ' typeprest', seteur: 'secteur', nature: 'nature' },
    { num_prest: 2, prix: 100, type: ' typeprest', seteur: 'secteur', nature: 'nature' },
    { num_prest: 2, prix: 100, type: ' typeprest', seteur: 'secteur', nature: 'nature' },
    { num_prest: 2, prix: 100, type: ' typeprest', seteur: 'secteur', nature: 'nature' },
    { num_prest: 2, prix: 100, type: ' typeprest', seteur: 'secteur', nature: 'nature' },
    { num_prest: 2, prix: 100, type: ' typeprest', seteur: 'secteur', nature: 'nature' },
    { num_prest: 2, prix: 100, type: ' typeprest', seteur: 'secteur', nature: 'nature' },
    { num_prest: 2, prix: 100, type: ' typeprest', seteur: 'secteur', nature: 'nature' },
  ];
  
}
