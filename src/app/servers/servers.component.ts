import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreated = 'No server was created!';
  serverName = '';

  constructor() {

    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);

  }


  ngOnInit() {

  }

  onserverCreation(){
    return this.serverCreated = 'Server was created!';
  }
  onUpdateServerName(event: Event){

    this.serverName = (<HTMLInputElement>event.target).value;

  }


}
