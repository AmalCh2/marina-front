import { Component, OnInit, Input } from '@angular/core';
import { AxiosService } from 'src/app/axios.service';
import { SideNavToggle } from '../SideNavToggle.interface';
import { ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-rechercher-emplacement',
  templateUrl: './rechercher-emplacement.component.html',
  styleUrls: ['./rechercher-emplacement.component.css']
})
export class RechercherEmplacementComponent implements OnInit {

  @Input() screenWidthh = 0;
  @Input() collapsed = false;

  isSideNavCollapsed = false;
  screenWidth = 0;
  data: string[] = [];
  totalPages: number = 3;
  currentPage: number = 1;
  paginationHTML: string = '';

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

  emplacements: any[] = [
    { num_emp: 1, largeur: 10, longueur: 20, tirant_eau: 15, nbr_mouillage: 5, type_corde: 'type', direction: 'direction', rang: 3, block: 'non', quai: 2, desig: 'designation' },
    { num_emp: 2, largeur: 10, longueur: 20, tirant_eau: 15, nbr_mouillage: 5, type_corde: 'type', direction: 'direction', rang: 3, block: 'non', quai: 2, desig: 'designation' },
    { num_emp: 2, largeur: 10, longueur: 20, tirant_eau: 15, nbr_mouillage: 5, type_corde: 'type', direction: 'direction', rang: 3, block: 'non', quai: 2, desig: 'designation' },
    { num_emp: 2, largeur: 10, longueur: 20, tirant_eau: 15, nbr_mouillage: 5, type_corde: 'type', direction: 'direction', rang: 3, block: 'non', quai: 2, desig: 'designation' },
    { num_emp: 2, largeur: 10, longueur: 20, tirant_eau: 15, nbr_mouillage: 5, type_corde: 'type', direction: 'direction', rang: 3, block: 'non', quai: 2, desig: 'designation' },
    { num_emp: 2, largeur: 10, longueur: 20, tirant_eau: 15, nbr_mouillage: 5, type_corde: 'type', direction: 'direction', rang: 3, block: 'non', quai: 2, desig: 'designation' },
    { num_emp: 2, largeur: 10, longueur: 20, tirant_eau: 15, nbr_mouillage: 5, type_corde: 'type', direction: 'direction', rang: 3, block: 'non', quai: 2, desig: 'designation' },
    { num_emp: 2, largeur: 10, longueur: 20, tirant_eau: 15, nbr_mouillage: 5, type_corde: 'type', direction: 'direction', rang: 3, block: 'non', quai: 2, desig: 'designation' },
    { num_emp: 2, largeur: 10, longueur: 20, tirant_eau: 15, nbr_mouillage: 5, type_corde: 'type', direction: 'direction', rang: 3, block: 'non', quai: 2, desig: 'designation' },
    { num_emp: 2, largeur: 10, longueur: 20, tirant_eau: 15, nbr_mouillage: 5, type_corde: 'type', direction: 'direction', rang: 3, block: 'non', quai: 2, desig: 'designation' },
    { num_emp: 2, largeur: 10, longueur: 20, tirant_eau: 15, nbr_mouillage: 5, type_corde: 'type', direction: 'direction', rang: 3, block: 'non', quai: 2, desig: 'designation' },
    { num_emp: 2, largeur: 10, longueur: 20, tirant_eau: 15, nbr_mouillage: 5, type_corde: 'type', direction: 'direction', rang: 3, block: 'non', quai: 2, desig: 'designation' },
    { num_emp: 2, largeur: 10, longueur: 20, tirant_eau: 15, nbr_mouillage: 5, type_corde: 'type', direction: 'direction', rang: 3, block: 'non', quai: 2, desig: 'designation' },
    { num_emp: 2, largeur: 10, longueur: 20, tirant_eau: 15, nbr_mouillage: 5, type_corde: 'type', direction: 'direction', rang: 3, block: 'non', quai: 2, desig: 'designation' },
    { num_emp: 2, largeur: 10, longueur: 20, tirant_eau: 15, nbr_mouillage: 5, type_corde: 'type', direction: 'direction', rang: 3, block: 'non', quai: 2, desig: 'designation' },
  ];
  
}
