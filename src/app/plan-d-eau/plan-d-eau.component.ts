import { Component, OnInit, Input } from '@angular/core';
import { SideNavToggle } from './SideNavToggle.interface';
import { AxiosService } from '../axios.service';

@Component({
  selector: 'app-plan-d-eau',
  templateUrl: './plan-d-eau.component.html',
  styleUrls: ['./plan-d-eau.component.css']
})
export class PlanDEauComponent implements OnInit {

  @Input() screenWidthh= 0;
  @Input() collapsed= false;
  getBodyClass():string{
    let styleClass = '';
    if (this.collapsed && this.screenWidthh > 768){
      styleClass='body-trimmed';
    } else if (this.collapsed && this.screenWidthh <= 768 && this.screenWidthh > 0){
      styleClass = 'body-md-screen'
    }
    return styleClass;
  }







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

  dataRows: any[] = [
    { number: 1, value1: 'bat_1', value2: 'prop_1', date1: '2024-05-10', date2: '2024-05-15', date3: '2024-05-20', date4: '2024-05-25', dimensions: 'Dimensions' },
    { number: 2, value1: 'bat_2', value2: 'prop_2', date1: '2024-05-11', date2: '2024-05-16', date3: '2024-05-21', date4: '2024-05-26', dimensions: 'Dimensions' },
    { number: 3, value1: 'bat_3', value2: 'prop_3', date1: '2024-05-12', date2: '2024-05-17', date3: '2024-05-22', date4: '2024-05-27', dimensions: 'Dimensions' },
    { number: 4, value1: 'bat_4', value2: 'prop_4', date1: '2024-05-13', date2: '2024-05-18', date3: '2024-05-23', date4: '2024-05-28', dimensions: 'Dimensions' },
    { number: 5, value1: 'bat_5', value2: 'prop_5', date1: '2024-05-14', date2: '2024-05-19', date3: '2024-05-24', date4: '2024-05-29', dimensions: 'Dimensions' },
    { number: 6, value1: 'bat_6', value2: 'prop_6', date1: '2024-05-10', date2: '2024-05-15', date3: '2024-05-20', date4: '2024-05-25', dimensions: 'Dimensions' },
    { number: 7, value1: 'bat_7', value2: 'prop_7', date1: '2024-05-11', date2: '2024-05-16', date3: '2024-05-21', date4: '2024-05-26', dimensions: 'Dimensions' },
    { number: 8, value1: 'bat_8', value2: 'prop_8', date1: '2024-05-12', date2: '2024-05-17', date3: '2024-05-22', date4: '2024-05-27', dimensions: 'Dimensions' },
    { number: 9, value1: 'bat_9', value2: 'prop_9', date1: '2024-05-13', date2: '2024-05-18', date3: '2024-05-23', date4: '2024-05-28', dimensions: 'Dimensions' },
    { number: 10, value1: 'bat_10', value2: 'prop_10', date1: '2024-05-14', date2: '2024-05-19', date3: '2024-05-24', date4: '2024-05-29', dimensions: 'Dimensions' },
    { number: 7, value1: 'bat_7', value2: 'prop_7', date1: '2024-05-11', date2: '2024-05-16', date3: '2024-05-21', date4: '2024-05-26', dimensions: 'Dimensions' },
    { number: 8, value1: 'bat_8', value2: 'prop_8', date1: '2024-05-12', date2: '2024-05-17', date3: '2024-05-22', date4: '2024-05-27', dimensions: 'Dimensions' },
    { number: 9, value1: 'bat_9', value2: 'prop_9', date1: '2024-05-13', date2: '2024-05-18', date3: '2024-05-23', date4: '2024-05-28', dimensions: 'Dimensions' },
    { number: 10, value1: 'bat_10', value2: 'prop_10', date1: '2024-05-14', date2: '2024-05-19', date3: '2024-05-24', date4: '2024-05-29', dimensions: 'Dimensions' },
  ];
  
  filterFooterInfo: string[] = ['infos 1', 'infos 2', 'infos 3']; // Tableau de chaînes pour les informations du footer
}

