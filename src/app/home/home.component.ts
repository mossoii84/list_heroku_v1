import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ImageFormatterComponent} from '../image-formatter/image-formatter.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  tovarLift = [
    {brend: 'OTIS',
      ref: 'DBA26800J1',
      discription:'communication board RS32',
      price:'130$',
      images:[
        {img: '../../assets/articles/DBA26800J1/DBA26800J1_1.jpg'},
        {img: '../../assets/articles/DBA26800J1/DBA26800J1_2.jpg'},
        {img: '../../assets/articles/DBA26800J1/DBA26800J1_3.jpg'},
      ]},
    {brend: 'OTIS',
      ref: 'GBA24350BH1',
      discription:'elevator Door Controller DCSS5-E',
      price:'769$',
      images:[
        {img: '../../assets/articles/GBA24350BH1/GBA24350BH1_1.jpg'},
        {img: '../../assets/articles/GBA24350BH1/GBA24350BH1_2.jpg'},
        {img: '../../assets/articles/GBA24350BH1/GBA24350BH1_3.jpg'},
      ]},
    {brend: 'OTIS',
      ref: 'GCA26800BA4',
      discription:'board ТСВ (VF-MRL)',
      price:'970$',
      images:[
        {img: '../../assets/articles/GCA26800BA4/GCA26800BA4_1.jpg'},
        {img: '../../assets/articles/GCA26800BA4/GCA26800BA4_2.jpg'},
        {img: '../../assets/articles/GCA26800BA4/GCA26800BA4_3.jpg'},
      ]},
    {brend: 'OTIS',
      ref: 'GCA26800KV60',
      discription:'board MCB3X for frequency drive OVF20CR 9kW',
      price:'1700$',
      images:[
        {img: '../../assets/articles/GCA26800KV60/GCA26800KV60_1.jpg'},
        {img: '../../assets/articles/GCA26800KV60/GCA26800KV60_2.jpg'},
        {img: '../../assets/articles/GCA26800KV60/GCA26800KV60_3.jpg'},
      ]},
    {brend: 'OTIS',
      ref: 'GCA26800MD40',
      discription:'board Scheda GECB 2 Per EPO GeN2',
      price:'1320$',
      images:[
        {img: '../../assets/articles/GCA26800MD40/GCA26800MD40_1.jpg'},
        {img: '../../assets/articles/GCA26800MD40/GCA26800MD40_2.jpg'},
        {img: '../../assets/articles/GCA26800MD40/GCA26800MD40_3.jpg'},
      ]},
    {brend: 'OTIS',
      ref: 'GCA26800NK20',
      discription:'board LCB II C (GBA26800NK30)',
      price:'1290$',
      images:[
        {img: '../../assets/articles/GCA26800NK20/GCA26800NK20_1.jpg'},
        {img: '../../assets/articles/GCA26800NK20/GCA26800NK20_2.jpg'},
        {img: '../../assets/articles/GCA26800NK20/GCA26800NK20_3.jpg'},
      ]},
    {brend: 'OTIS',
      ref: 'GDA21305KY60',
      discription:'ULTRA DRIVE OVFR03B-402 1000KG (DCPB GCA26800PS2)',
      price:'1700$',
      images:[
        {img: '../../assets/articles/GDA21305KY60/GDA21305KY60_1.jpg'},
        {img: '../../assets/articles/GDA21305KY60/GDA21305KY60_2.jpg'},
        {img: '../../assets/articles/GDA21305KY60/GDA21305KY60_3.jpg'},
      ]},
    {brend: 'OTIS',
      ref: 'GDA26800KA10',
      discription:'board TCBC',
      price:'1073$',
      images:[
        {img: '../../assets/articles/GDA26800KA10/GDA26800KA10_1.jpg'},
        {img: '../../assets/articles/GDA26800KA10/GDA26800KA10_2.jpg'},
        {img: '../../assets/articles/GDA26800KA10/GDA26800KA10_3.jpg'},
      ]},
    {brend: 'OTIS',
      ref: 'GGA21240D10',
      discription:'main board LCB-II',
      price:'517$',
      images:[
        {img: '../../assets/articles/GGA21240D10/GGA21240D10_1.jpg'},
        {img: '../../assets/articles/GGA21240D10/GGA21240D10_2.jpg'},
        {img: '../../assets/articles/GGA21240D10/GGA21240D10_3.jpg'},
      ]},
    {brend: 'KONE',
      ref: 'KM50006052G02',
      discription:'Scheda LCEADOe (Ex KM713160G02 LCE ADO/ACL)',
      price:'349$',
      images:[
        {img:'../../assets/articles/KM50006052G02/KM50006052G02_1.jpg'},
        {img:'../../assets/articles/KM50006052G02/KM50006052G02_2.jpg'},
        {img:'../../assets/articles/KM50006052G02/KM50006052G02_3.jpg'},
      ]},

  ];


  // initialWidth: 100 // размер колонок по
  columnDefs = [
    { field: 'ref', sortable: true,  minWidth: 200, maxWidth: 250,checkboxSelection: true, resizable: true },
    { field: 'brend', sortable: true, minWidth: 90, maxWidth: 150, resizable: true },
    { field: 'price', sortable: true,  minWidth: 70,maxWidth: 100, resizable: true },
    { field: 'discription',  minWidth: 350, maxWidth: 350, resizable: true},
    { field: 'img', headerName: 'image', cellRendererFramework: ImageFormatterComponent,
      autoHeight: true, flex: 1, minWidth: 200, maxWidth: 250,}
  ];


  rowData;
  searchValue: any; //для общего фильтра

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.rowData = this.http.get('/assets/tableMassiv/myMassiv.json');
  }



}
