import {Component, OnInit} from '@angular/core';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Pays} from '../shared/Model/Pays';
import {PaysService} from '../shared/Service/Pays.service';

@Component({
  selector: 'app-stock',
  templateUrl: './pays.component.html',
  styleUrls: ['./pays.component.css']
})
export class PaysComponent implements OnInit {

  listPays: any;
  form: boolean = false;
  Pays!: Pays;
  closeResult!: string;

  constructor(private PaysService: PaysService, private modalService: NgbModal) {
  }

  ngOnInit(): void {
    this.getAllPays();

    this.Pays = {
      nom_pays: null,
      nationnalite:null,
      pavillon:null
        }
  }

  getAllPays() {
    this.PaysService.getAllPays().subscribe(res => this.listPays = res)
  }

  addPays(p: any) {
    this.PaysService.addPays(p).subscribe(() => {
      this.getAllPays();
      this.form = false;
    });
  }

  editPays(Pays: Pays) {
    this.PaysService.editPays(Pays).subscribe();
  }

  deletePays(idPays: any) {
    this.PaysService.deletePays(idPays).subscribe(() => this.getAllPays())
  }

  open(content: any, action: any) {
    if (action != null)
      this.Pays = action
    else
      this.Pays = new Pays();
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
}
