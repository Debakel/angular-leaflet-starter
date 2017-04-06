import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import MapService from "./services/map.service";
import {NominatimService} from "./services/nominatim.service";
import LatLng = L.LatLng;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  providers: [MapService, NominatimService]
})
export class AppComponent implements OnInit{
  searchQuery: string;
  results: any[];
  markerLayer: any;
  constructor(private mapService:MapService,
              private nominatimService: NominatimService){}
  ngOnInit()
  {
    this.mapService.initialize();
  }
  search(){
    this.clear();
    this.nominatimService.search(this.searchQuery).subscribe(
      results => this.results = results
    );
  }
  clear(){
    this.results = [];
    this.searchQuery = "";
  }
  showResult(place){
    let latlng = new LatLng(place.lat, place.lon);
    L.marker(latlng).addTo(this.mapService.map);
    this.mapService.map.setView(latlng, 15);

  }
  showDetails(result){
    window.open('https://nominatim.openstreetmap.org/details.php?place_id=' + result.place_id);
  }


}
