import { ITrip } from './../model/trip.model';
import { TripService } from './trip-optimizer.service';
import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import {MatPaginator, PageEvent} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

declare var ol: any;

@Component({
  selector: 'app-trip-optimizer',
  templateUrl: './trip-optimizer.component.html',
  styleUrls: ['./trip-optimizer.component.css']
})
export class TripOptimizerComponent implements OnInit {

  displayedColumns: string[] = ['trem', 'local', 'tripAtivo', 'falha'];
  dataSource: ITrip[] = [];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  length = 100;
  pageIndex = 0;
  pageSize = 5;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  latitude: number = -19.8157;
  longitude: number = -43.9542;

  map: any;

  buscaRealizada: boolean = false;

  error = false;

  constructor(private tripService: TripService) {}

  // Filtros
  estacaoSelecionada: string = null;
  tremSelecionado: string = null;
  locomotivaSelecionada: string = null;
  osSelecionada: string = null;
  areaSelecionada: string = null;

  ngOnInit() {
    this.loadMap();
    this.loadData();
  }

  loadMap(): void{
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

  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
  }

  setCenter() {
    var view = this.map.getView();
    view.setCenter(ol.proj.fromLonLat([this.longitude, this.latitude]));
    view.setZoom(8);
  }

  clean() {
    this.buscaRealizada = false;
    this.estacaoSelecionada = null;
    this.tremSelecionado = null;
    this.locomotivaSelecionada = null;
    this.osSelecionada = null;
  }

  onPageChange(pageEvent: PageEvent) {
    this.pageIndex = pageEvent.pageIndex;
    this.pageSize = pageEvent.pageSize;

    this.findTrips();
  }

  findTrips() {
    this.tripService.findAll(this.pageIndex, this.pageSize).subscribe(trips => {
      this.dataSource = trips.body;
      this.buscaRealizada = true;
    })
  }

  getTripTotalLength() {
    this.tripService.getLength().subscribe(total => {
      this.length = total.body.total;
    })
  }

  changeArea() {
    this.findTrips();
    this.length = this.dataSource.length;
  }

  loadData() {
    this.findTrips();
    this.getTripTotalLength();
    this.length = this.dataSource.length;
  }
}
