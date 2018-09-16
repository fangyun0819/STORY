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
    item['key'] = "start_fab_742998";
    item['en'] = "New button";
    
    item = {};
    this.items.push(item);
    item['key'] = "start_button_214365";
    item['en'] = "New button";
    
    item = {};
    this.items.push(item);
    item['key'] = "component9_text_46053";
    item['en'] = "June,2019";
    
    item = {};
    this.items.push(item);
    item['key'] = "start_button_347047";
    item['en'] = "New button";
    
    item = {};
    this.items.push(item);
    item['key'] = "start_button_398777";
    item['en'] = "New button";
    
    item = {};
    this.items.push(item);
    item['key'] = "start_text_632178";
    item['en'] = "新增文字";
    
    item = {};
    this.items.push(item);
    item['key'] = "start_text_560776";
    item['en'] = "多人編輯";
    
    item = {};
    this.items.push(item);
    item['key'] = "start_button_614334";
    item['en'] = "預覽畢業紀念冊";
    
    item = {};
    this.items.push(item);
    item['key'] = "start_fab_86525";
    item['en'] = "New button";
    
    item = {};
    this.items.push(item);
    item['key'] = "start_button_339434";
    item['en'] = "BACK";
    
    item = {};
    this.items.push(item);
    item['key'] = "start_button_483977";
    item['en'] = "NEXT";
    
    item = {};
    this.items.push(item);
    item['key'] = "start_addtext_751390";
    item['en'] = "新增貼圖";
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
