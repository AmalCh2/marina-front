import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  @Output() onSubmitLoginEvent = new EventEmitter();

  login:string ="";
  password:string ="";

  onSubmitLogin():void{
    this.onSubmitLoginEvent.emit({"login":this.login,"password":this.password});
  }
  constructor() { }

  ngOnInit(): void {
  }

}
