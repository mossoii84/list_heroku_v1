import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-formatter',
  templateUrl: './image-formatter.component.html',
  styleUrls: ['./image-formatter.component.css']
})


  // Создали класс чтобы через него фото отоброжать в Ag-Grid
export class ImageFormatterComponent{
  params: any;
  agInit(params: any){
    this.params = params;
  }

}
