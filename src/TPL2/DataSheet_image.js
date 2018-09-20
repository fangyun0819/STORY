import DataSheetBase from './DataSheetBase.js';
import datasheet_image_row0_column1 from './images/datasheet_image_row0_column1.png';

export default class DataSheet_image extends DataSheetBase {

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
    item['column1'] = datasheet_image_row0_column1;
    item.key = key++;
  }

}
