import {Ui} from "../Ui.js";

export class SuperElement {
    constructor(elementObject={}, FormShowBehaviorObject = {}){
        this.Ui = new Ui()
        this.elementTypeCrypt = elementObject.elementTypeCrypt
        this.formBehavior = FormShowBehaviorObject;
        this.button = elementObject.button;
        this.formHtml = '';
    }
    formShow(){
        this.formHtml = this.formBehavior.formBuilder()
        this.button.closest('.answers_elements_types').next().append(this.formHtml)
    }

}
