import {ElementFormShowBehaviors} from "./ElementFormShowBehaviors.js";
import {UniqeGenerator} from "../../Lib/UniqeGenerator.js";

export class BoxElementFormShow extends ElementFormShowBehaviors{
    formBuilder(){
        let formHtml ='' +
            '<div class="one_element_box" sub_type="box" element_type="'+this.elementObject.elementType+'" ' +
            'question_crypt="'+this.elementObject.elementQuestionCrypt+'" ' +
            'element_type_crypt="'+this.elementObject.elementTypeCrypt+'"' +
            'box_crypt="'+UniqeGenerator.getKey()+'">' +
            '<div class="label">'+this.elementObject.elementTypeTitle+'</div>' +
            '<div class="ans_container">' +
            '<div class="add_element_button">' +
            '</div>' +
            '<div class="answers_forms_container">' +
            '</div>'

            '</div>' +
            '</div>';
        return formHtml;
    }
}
