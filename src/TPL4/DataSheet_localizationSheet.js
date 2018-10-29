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
    item['key'] = "start_button_499721";
    item['en'] = "Start";
    
    item = {};
    this.items.push(item);
    item['key'] = "screen1_button_825162";
    item['en'] = "Next";
    
    item = {};
    this.items.push(item);
    item['key'] = "screen2_button_97305";
    item['en'] = "Next";
    
    item = {};
    this.items.push(item);
    item['key'] = "screen2_button_991300";
    item['en'] = "Next";
    
    item = {};
    this.items.push(item);
    item['key'] = "screen2_button_896513";
    item['en'] = "Next";
    
    item = {};
    this.items.push(item);
    item['key'] = "screen9_button_850700";
    item['en'] = "Next";
    
    item = {};
    this.items.push(item);
    item['key'] = "screen10_button_969519";
    item['en'] = "Next";
    
    item = {};
    this.items.push(item);
    item['key'] = "screen11_button_479780";
    item['en'] = "Next";
    
    item = {};
    this.items.push(item);
    item['key'] = "screen12_button_889527";
    item['en'] = "Next";
    
    item = {};
    this.items.push(item);
    item['key'] = "screen13_button_411338";
    item['en'] = "Next";
    
    item = {};
    this.items.push(item);
    item['key'] = "screen14_button_62803";
    item['en'] = "Next";
    
    item = {};
    this.items.push(item);
    item['key'] = "screen15_button_216032";
    item['en'] = "Next";
    
    item = {};
    this.items.push(item);
    item['key'] = "screen16_button_862859";
    item['en'] = "Next";
    
    item = {};
    this.items.push(item);
    item['key'] = "screen1_button_493259";
    item['en'] = "Next";
    
    item = {};
    this.items.push(item);
    item['key'] = "screen2_button_67339";
    item['en'] = "Next";
    
    item = {};
    this.items.push(item);
    item['key'] = "screen9_button_576926";
    item['en'] = "Next";
    
    item = {};
    this.items.push(item);
    item['key'] = "screen10_button_580740";
    item['en'] = "Next";
    
    item = {};
    this.items.push(item);
    item['key'] = "screen11_button_739104";
    item['en'] = "Next";
    
    item = {};
    this.items.push(item);
    item['key'] = "screen12_button_403841";
    item['en'] = "Next";
    
    item = {};
    this.items.push(item);
    item['key'] = "screen13_button_126219";
    item['en'] = "Next";
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
