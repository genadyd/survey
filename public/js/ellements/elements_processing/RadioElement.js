import {SuperElement} from "./SuperElement.js";

export class RadioElement extends SuperElement{
    formShow(){
        this.formHtml = this.formBehavior.formBuilder()
        this.button.closest('.one_element_box[sub_type=box]').find('.answers_forms_container:first').append(this.formHtml)
    }
}
