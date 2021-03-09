import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-ag-grid-table1',
  templateUrl: './ag-grid-table1.component.html',
  styleUrls: ['./ag-grid-table1.component.css']
})
export class AgGridTable1Component implements OnInit {


     // Колонки в нашей таблице Свои данные как массив
  // columnDefs = [
  //   { field: 'make', sortable: true, filter: true },
  //   { field: 'model', sortable: true, filter: true },
  //   { field: 'price', sortable: true, filter: true }
  // ];
  // Свои данные как массив
  // rowData = [
  //   { make: 'Toyota', model: 'Celica', price: 35000 },
  //   { make: 'Ford', model: 'Mondeo', price: 32000 },
  //   { make: 'Porsche', model: 'Boxter', price: 72000 }
  // ];

  // initialWidth: 100 // размер колонок по
  columnDefs = [
    // { field: 'ref', sortable: true, filter: true, checkboxSelection: true },
    { field: 'id', sortable: true, filter: true, maxWidth: 20},
    { field: 'ref', sortable: true, filter: true, minWidth: 130, resizable: true
    },
    { field: 'brend', sortable: true, filter: true, minWidth: 130, resizable: true },
    { field: 'price', sortable: true, filter: true, minWidth: 130, resizable: true },
    { field: 'discription', sortable: true, filter: true, minWidth: 150, resizable: true }
  ];

  defaultColDef: {
    resizable: true,
    minWidth: 110,
    flex: 1
  };

  rowData;
  searchValue: any; // для общего фильтра

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.rowData = this.http.get('/assets/tableMassiv/myMassiv.json');
  }







}
