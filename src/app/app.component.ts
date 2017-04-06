import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import MapService from "./services/map.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  providers: [MapService]
})
export class AppComponent implements OnInit{
  title = 'app works!';
  constructor(private mapService:MapService){}
  ngOnInit()
  {
    this.mapService.initialize();
  }


}
