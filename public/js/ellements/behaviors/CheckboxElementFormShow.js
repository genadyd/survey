import {ElementFormShowBehaviors} from "./ElementFormShowBehaviors.js";
import {UniqeGenerator} from "../../Lib/UniqeGenerator.js";

export class CheckboxElementFormShow extends ElementFormShowBehaviors{
    formBuilder(){
        let formHtml ='' +
            '<div class="one_element_box" element_key="'+UniqeGenerator.getKey()+'" element_type="'+this.elementObject.elementType+'" question_crypt="'+this.elementObject.elementQuestionCrypt+'" element_type_crypt="'+this.elementObject.elementTypeCrypt+'">' +
            '<div class="label">התשובה</div>' +
            '<div class="ans_container">' +
            '<div class="type_heading">'+this.elementObject.elementTypeTitle+'</div> ' +
            '<div class="answer_title">' +
            '<input type="text" placeholder="התשובה">' +
            '</div>' +
            '<div class="controls_box"' +
            '<div class="ans_delete" title="למחוק את האלמנט">' +
            '<i class="far fa-trash-alt answer_remove_init text-danger"></i>' +
            '</div>' +
            '</div>'+
            '</div>' +
            '</div>';
        return formHtml;
    }
}
