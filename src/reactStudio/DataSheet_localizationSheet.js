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
    item['key'] = "component8_text_193867";
    item['en'] = "Nice to be with you guys";
    
    item = {};
    this.items.push(item);
    item['key'] = "component4_text_953734";
    item['en'] = "LIVE";
    
    item = {};
    this.items.push(item);
    item['key'] = "component4_text2_292218";
    item['en'] = "YOUNG";
    
    item = {};
    this.items.push(item);
    item['key'] = "component9_text_761510";
    item['en'] = "June,2019";
    
    item = {};
    this.items.push(item);
    item['key'] = "component10_text_123634";
    item['en'] = "\n";
    
    item = {};
    this.items.push(item);
    item['key'] = "component10_text_954756";
    item['en'] = "The Maze of Life";
    
    item = {};
    this.items.push(item);
    item['key'] = "screen22_button_227290";
    item['en'] = "Next";
    
    item = {};
    this.items.push(item);
    item['key'] = "screen13_button_698640";
    item['en'] = "New";
    
    item = {};
    this.items.push(item);
    item['key'] = "screen13_button_988292";
    item['en'] = "Next";
    
    item = {};
    this.items.push(item);
    item['key'] = "screen14_button_837370";
    item['en'] = "Next";
    
    item = {};
    this.items.push(item);
    item['key'] = "screen16_button_899834";
    item['en'] = "Next";
    
    item = {};
    this.items.push(item);
    item['key'] = "screen17_button_651650";
    item['en'] = "NEXT";
    
    item = {};
    this.items.push(item);
    item['key'] = "screen18_button_784031";
    item['en'] = "NEXT";
    
    item = {};
    this.items.push(item);
    item['key'] = "screen19_button_296953";
    item['en'] = "NEXT";
    
    item = {};
    this.items.push(item);
    item['key'] = "screen15_button_165402";
    item['en'] = "Next";
    
    item = {};
    this.items.push(item);
    item['key'] = "screen20_button_868184";
    item['en'] = "Next";
    
    item = {};
    this.items.push(item);
    item['key'] = "scratchpad_text_289930";
    item['en'] = " ";
    
    item = {};
    this.items.push(item);
    item['key'] = "scratchpad_button_379999";
    item['en'] = "Start";
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
