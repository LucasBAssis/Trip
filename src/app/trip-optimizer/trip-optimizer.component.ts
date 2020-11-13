import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

declare var ol: any;

@Component({
  selector: 'app-trip-optimizer',
  templateUrl: './trip-optimizer.component.html',
  styleUrls: ['./trip-optimizer.component.css']
})
export class TripOptimizerComponent implements OnInit {

  displayedColumns: string[] = ['trem', 'local', 'tripAtivo', 'falha'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  latitude: number = -19.8157;
  longitude: number = -43.9542;

  map: any;

  buscaRealizada: boolean = false;

  // Filtros
  estacaoSelecionada: string = null;
  tremSelecionado: string = null;
  locomotivaSelecionada: string = null;
  osSelecionada: string = null;

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

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  setCenter() {
    var view = this.map.getView();
    view.setCenter(ol.proj.fromLonLat([this.longitude, this.latitude]));
    view.setZoom(8);
  }

  realizaBusca() {
    this.buscaRealizada = true;
    console.log(this.estacaoSelecionada);
    console.log(this.tremSelecionado);
    console.log(this.locomotivaSelecionada);
    console.log(this.osSelecionada);

    // this.dataSource.data = ELEMENT_DATA;
    // this.dataSource.paginator = this.paginator;
  }

  limpaBusca() {
    this.buscaRealizada = false;
    this.estacaoSelecionada = null;
    this.tremSelecionado = null;
    this.locomotivaSelecionada = null;
    this.osSelecionada = null;
  }
}

export interface PeriodicElement {
  trem: string;
  local: string;
  tripAtivo: string;
  falha: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {trem: 'X64', local: 'Santa Fé do Sul', tripAtivo: 'Sim', falha: 'Problema na comunicação CBL e Trip'},
  {trem: 'X65', local: 'Santa Fé do Sul', tripAtivo: 'Sim', falha: 'Problema na comunicação CBL e Trip'},
  {trem: 'X66', local: 'Santa Fé do Sul', tripAtivo: 'Sim', falha: 'Problema na comunicação CBL e Trip'},
  {trem: 'X67', local: 'Santa Fé do Sul', tripAtivo: 'Sim', falha: 'Problema na comunicação CBL e Trip'},
  {trem: 'X68', local: 'Santa Fé do Sul', tripAtivo: 'Sim', falha: 'Problema na comunicação CBL e Trip'},
  {trem: 'X69', local: 'Santa Fé do Sul', tripAtivo: 'Sim', falha: 'Problema na comunicação CBL e Trip'},
  {trem: 'X70', local: 'Santa Fé do Sul', tripAtivo: 'Sim', falha: 'Problema na comunicação CBL e Trip'},
  {trem: 'X71', local: 'Santa Fé do Sul', tripAtivo: 'Sim', falha: 'Problema na comunicação CBL e Trip'},
  {trem: 'X72', local: 'Santa Fé do Sul', tripAtivo: 'Sim', falha: 'Problema na comunicação CBL e Trip'},
  {trem: 'X73', local: 'Santa Fé do Sul', tripAtivo: 'Sim', falha: 'Problema na comunicação CBL e Trip'}
]
