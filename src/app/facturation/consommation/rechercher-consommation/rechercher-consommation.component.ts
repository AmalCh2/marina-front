import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { AxiosService } from '../../../axios.service';
import { SideNavToggle } from '../../SideNavToggle.interface';

@Component({
  selector: 'app-rechercher-consommation',
  templateUrl: './rechercher-consommation.component.html',
  styleUrls: ['./rechercher-consommation.component.css']
})
export class RechercherConsommationComponent implements OnInit {
  @Input() screenWidthh = 0;
  @Input() collapsed = false;

  isSideNavCollapsed = false;
  screenWidth = 0;
  data: string[] = [];

  constructor(private axiosService: AxiosService) {}

  ngOnInit(): void {
    this.axiosService.request('GET', '/messages', null).then(
      (response) => this.data = response.data
    );
  }

  onToggleSideNav(data: SideNavToggle): void {
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }

  getBodyClass(): string {
    if (this.collapsed && this.screenWidthh > 768) {
      return 'body-trimmed';
    } else if (this.collapsed && this.screenWidthh <= 768 && this.screenWidthh > 0) {
      return 'body-md-screen';
    }
    return '';
  }

  @ViewChild('section') section!: ElementRef;
  @ViewChild('overlay') overlay!: ElementRef;

  showModal(): void {
    this.section.nativeElement.classList.add('active');
    this.overlay.nativeElement.classList.add('active');
  }

  hideModal(): void {
    this.section.nativeElement.classList.remove('active');
    this.overlay.nativeElement.classList.remove('active');
  }

  closeOverlay(): void {
    this.hideModal();
  }

  consommationsData: any[] = [
    { 
      num: 'Bateau 1', 
      sejour: 'Propriétaire 1', 
      facture: 'IMM-001', 
      prestation: 'Type 1'
    },
    { 
      num: 'Bateau 1', 
      sejour: 'Propriétaire 1', 
      facture: 'IMM-001', 
      prestation: 'Type 1'
    },{ 
      num: 'Bateau 1', 
      sejour: 'Propriétaire 1', 
      facture: 'IMM-001', 
      prestation: 'Type 1'
    },{ 
      num: 'Bateau 1', 
      sejour: 'Propriétaire 1', 
      facture: 'IMM-001', 
      prestation: 'Type 1'
    },{ 
      num: 'Bateau 1', 
      sejour: 'Propriétaire 1', 
      facture: 'IMM-001', 
      prestation: 'Type 1'
    },
  ];
}
