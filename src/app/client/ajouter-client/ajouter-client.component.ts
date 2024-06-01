import { Component, OnInit, Input } from '@angular/core';
import { SideNavToggle } from '../SideNavToggle.interface';
import { AxiosService } from 'src/app/axios.service';
import { Client } from 'src/app/shared/Model/Client';
import { Pays } from 'src/app/shared/Model/Pays';
import { ClientService } from 'src/app/shared/Service/Client.service';
import { PaysService } from 'src/app/shared/Service/Pays.service';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-ajouter-client',
  templateUrl: './ajouter-client.component.html',
  styleUrls: ['./ajouter-client.component.css']
})
export class AjouterClientComponent implements OnInit {
  @Input() screenWidthh = 0;
  @Input() collapsed = false;

  isSideNavCollapsed = false;
  screenWidth = 0;
  data: string[] = [];

  listClient: any;
  form: boolean = false;
  Client!: Client;
  closeResult!: string;

  listPays: any;
  Pays!: Pays;
  nationnalites: string[] = [];

  selectedPays: any;
  onNomChange(event: any) {
    if (this.selectedPays) {
      this.Pays.nationnalite = this.selectedPays.nationnalite;
      this.nationnalites = [this.selectedPays.nationnalite];
    } else {
      this.Pays.nationnalite = '';
      this.nationnalites = [];
    }
  }

  constructor(private axiosService: AxiosService,
    private ClientService: ClientService,
    private modalService: NgbModal,
    private PaysService: PaysService) { }

  ngOnInit(): void {
    this.axiosService.request(
      "GET",
      "/messages",
      null
    ).then(
      (response) => this.data = response.data
    );
    
    this.getAllClients();

    this.Client = {
      id_cli: null,
    nom_cli: null,
    prenom_cli: null,
    etat_civil: null,
    adresse_cli: null,
    ville_cli: null,
    tel_cli: null,
    fax_cli: null,
    mobile_cli: null,
    email_cli: null,
    exo_cli: null,
    pays:null,
    

    };
    this.getAllPays();

    this.Pays = {
    nom_pays:null,
    nationnalite : null,
    pavillon : null,
    }
  }
  getAllPays() {
    this.PaysService.getAllPays().subscribe(res => this.listPays = res)
  }

getAllClients() {
  this.ClientService.getAllClients().subscribe(res => this.listClient = res)
}

addClient(c: any) {
  this.ClientService.addClient(c).subscribe(() => {
    this.getAllClients();
    this.form = false;
  });
}

editClient(client: Client) {
  this.ClientService.editClient(client).subscribe();
}

deleteClient(idClient: any) {
  this.ClientService.deleteClient(idClient).subscribe(() => this.getAllClients())
}

open(content: any, action: any) {
  if (action != null)
    this.Client = action
  else
    this.Client = new Client();
  this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    this.closeResult = `Closed with: ${result}`;
  }, (reason) => {
    this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  });
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
