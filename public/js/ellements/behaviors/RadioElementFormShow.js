import {ElementFormShowBehaviors} from "./ElementFormShowBehaviors.js";
import {UniqeGenerator} from "../../Lib/UniqeGenerator.js";

export class RadioElementFormShow extends ElementFormShowBehaviors{
    formBuilder(){
        let formHtml ='' +
            '<div class="one_element_box" box_crypt="'+this.elementObject.boxCrypt+'" element_key="' + UniqeGenerator.getKey() + '" element_type="' + this.elementObject.elementType + '" question_crypt="' + this.elementObject.elementQuestionCrypt + '" element_type_crypt="' + this.elementObject.elementTypeCrypt + '">' +
            '<div class="ans_container">' +
            '<div class="type_heading">' + this.elementObject.elementTypeTitle + '</div> ' +
            '<div class="answer_title">' +
            '<input type="text" placeholder="התשובה">' +
            '</div>' +
            '<div class="controls_box">' +
            '<select class="next_act_select">' +
            '<option value="end_survey">לסיום הסקר</option>' +
            '<option value="end_survey_message">לסיום הסקר עם הודעה</option>' +
            '<option value="create_new_quest">ליצור שאלה חדשה</option>' +
            '<option value="parent_quest_action" selected>התסריט של השאלה</option>' +
            '</select>' +
            '<div class="add_next_act" title="התרחיש הבא"><i class="far fa-hand-point-right"></i></div>' +
            '<div class="ans_delete" title="למחוק את האלמנט">' +
            '<i class="far fa-trash-alt answer_remove_init text-danger"></i>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>';
        return formHtml;
    }
}
