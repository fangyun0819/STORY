import DataSheetBase from './DataSheetBase.js';
import datasheet_addSticker_row0_image from './images/datasheet_addSticker_row0_image.png';
import datasheet_addSticker_row1_image from './images/datasheet_addSticker_row1_image.png';
import datasheet_addSticker_row2_image from './images/datasheet_addSticker_row2_image.png';
import datasheet_addSticker_row3_image from './images/datasheet_addSticker_row3_image.png';
import datasheet_addSticker_row4_image from './images/datasheet_addSticker_row4_image.png';
import datasheet_addSticker_row5_image from './images/datasheet_addSticker_row5_image.png';

export default class DataSheet_addSticker extends DataSheetBase {

  constructor(id, updateCb) {
    super(id, updateCb);
    this.requestedKeyPath = "";  // this value can be specified in the React Studio data sheet UI
  }

  makeDefaultItems() {
    // eslint-disable-next-line no-unused-vars
    let key = 1;
    // eslint-disable-next-line no-unused-vars
    let item;
    
    item = {};
    this.items.push(item);
    item['id'] = "1\n";
    item['image'] = datasheet_addSticker_row0_image;
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['id'] = "2";
    item['image'] = datasheet_addSticker_row1_image;
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['id'] = "3";
    item['image'] = datasheet_addSticker_row2_image;
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['id'] = "4";
    item['image'] = datasheet_addSticker_row3_image;
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['id'] = "5";
    item['image'] = datasheet_addSticker_row4_image;
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['id'] = "6";
    item['image'] = datasheet_addSticker_row5_image;
    item.key = key++;
  }

}
