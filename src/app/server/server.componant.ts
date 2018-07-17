import {Component} from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.componant.html',
  styleUrls: ['./server.componant.css']
})

export class ServerComponant {

  serverId: number = 10;
  serverStatus: string = 'offline';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getserverStatus() {
    return this.serverStatus;
  }

  getColor() {

    return this.serverStatus === 'online' ? 'green' : 'red';
  }

}
