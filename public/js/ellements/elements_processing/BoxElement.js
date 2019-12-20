import {SuperElement} from "./SuperElement.js";
import {Model} from "../Model.js";
import {AjaxSender} from "../../ajax/AjaxSender.js";


export class BoxElement extends SuperElement{
  formShow() {
      super.formShow()
      let model = new Model();
      // let Ui = new Ui;
      let jsonObj = model.formJsonBuilder();
      jsonObj.module = 'forms_elements'
      jsonObj.func = 'getOne';
      jsonObj.crypt = this.elementTypeCrypt;
      let ajax = new AjaxSender(jsonObj);
      ajax.AjaxSend().then((res) => {
          this.Ui.buttonShow(res)
      });
  }
}
