import DataSheetBase from './DataSheetBase.js';

export default class DataSheet_localizationSheet extends DataSheetBase {

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
    item['key'] = "component4_text_144373";
    item['en'] = "I was so ordinary, yet so lucky.";
    
    item = {};
    this.items.push(item);
    item['key'] = "component3_text_830225";
    item['en'] = "It is fate that brings us together. \nIt is friendship that ties us together.";
    
    item = {};
    this.items.push(item);
    item['key'] = "screen1_button_836496";
    item['en'] = "NEXT";
    
    item = {};
    this.items.push(item);
    item['key'] = "screen2_button_413713";
    item['en'] = "NEXT";
    
    item = {};
    this.items.push(item);
    item['key'] = "screen2_button_965667";
    item['en'] = "NEXT";
    
    item = {};
    this.items.push(item);
    item['key'] = "screen3_button_95044";
    item['en'] = "NEXT";
    
    item = {};
    this.items.push(item);
    item['key'] = "screen15_button_602613";
    item['en'] = "NEXT";
    
    item = {};
    this.items.push(item);
    item['key'] = "screen16_button_863213";
    item['en'] = "NEXT";
    
    item = {};
    this.items.push(item);
    item['key'] = "screen19_button_1039093";
    item['en'] = "NEXT";
    
    item = {};
    this.items.push(item);
    item['key'] = "screen17_button_614561";
    item['en'] = "NEXT";
    
    item = {};
    this.items.push(item);
    item['key'] = "screen18_button_25210";
    item['en'] = "NEXT";
    
    item = {};
    this.items.push(item);
    item['key'] = "screen20_button_589637";
    item['en'] = "NEXT";
    
    item = {};
    this.items.push(item);
    item['key'] = "screen21_button_367223";
    item['en'] = "NEXT";
    
    item = {};
    this.items.push(item);
    item['key'] = "start_button_719774";
    item['en'] = "START";
  }

  getStringsByLanguage = () => {
    let stringsByLang = {};
    for (let row of this.items) {
      const locKey = row.key;
      for (let key in row) {
        if (key === 'key')
          continue;
        let langObj = stringsByLang[key] || {};
        langObj[locKey] = row[key];
        stringsByLang[key] = langObj;
      }
    }
    return stringsByLang;
  }

}
