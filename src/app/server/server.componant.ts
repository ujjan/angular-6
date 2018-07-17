import {Component} from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.componant.html',
  styleUrls: ['./server.componant.css']
})

export class ServerComponant {

  serverId: number = 10;
  serverStatus: string = 'offline';

  getserverStatus(){
    return this.serverStatus;
  }

}
