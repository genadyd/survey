import {SuperElement} from "./SuperElement.js";
import {Model} from "../Model.js";
import {AjaxSender} from "../../ajax/AjaxSender.js";


export class BoxElement extends SuperElement{
  formShow() {
      super.formShow()
      let model = new Model();
      // let Ui = new Ui;
      let jsonObj = model.formJsonBuilder();
      jsonObj.func = 'getTypeByBoxId';
      jsonObj.collback = this.Ui.buttonShow;
      jsonObj.box_crypt = this.elementTypeCrypt;
      let ajax = new AjaxSender(jsonObj);
      ajax.AjSender('json');
  }
}
