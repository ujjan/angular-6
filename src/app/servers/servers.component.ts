import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreated = 'No server was created! ';
  serverName = 'Test Server';
  serverCreate = false;
  servers = ['server 1', 'server 2'];

  constructor() {

    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);

  }


  ngOnInit() {

  }

  onserverCreation() {
    this.serverCreate = true;
    this.servers.push(this.serverName)
    return this.serverCreated = 'Server was created!' + this.serverName;
  }
  onUpdateServerName(event: Event) {

    this.serverName = (<HTMLInputElement>event.target).value;

  }


}
