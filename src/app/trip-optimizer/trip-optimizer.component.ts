import { Component, OnInit } from '@angular/core';

declare var ol: any;

@Component({
  selector: 'app-trip-optimizer',
  templateUrl: './trip-optimizer.component.html',
  styleUrls: ['./trip-optimizer.component.css']
})
export class TripOptimizerComponent implements OnInit {

  latitude: number = -19.8157;
  longitude: number = -43.9542;

  map: any;

  ngOnInit() {
    this.map = new ol.Map({
      target: 'map',
      layers: [
        new ol.layer.Tile({
          source: new ol.source.OSM()
        })
      ],
      view: new ol.View({
        center: ol.proj.fromLonLat([-43.9542, -19.8157]),
        zoom: 8
      })
    });
  }

  setCenter() {
    var view = this.map.getView();
    view.setCenter(ol.proj.fromLonLat([this.longitude, this.latitude]));
    view.setZoom(8);
  }
}
