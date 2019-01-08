import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChapterService {

  itemList = [ '表示', '繰り返し', '条件', '=', '出力', '入力', '和', '差', '積', '商', '剰余' ];

  constructor() { }
}
