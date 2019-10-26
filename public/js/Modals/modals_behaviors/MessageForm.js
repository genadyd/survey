import {ModalBehavior} from "./ModalBehavior.js";
import {UniqeGenerator} from "../../Lib/UniqeGenerator.js";

export class MessageForm extends ModalBehavior{
    getFormHtml(){
        let formHtml = '<div class="modal_container">' +
            '<div class="modal_header">' +
            '<div class="modal_heading">ליצור הודעה ל: ' +this.questionObject.parentAnswerTitle+ '</div>' +
            '<div class="modal_closer">' +
            '<i class="fas fa-times"></i>' +
            '</div>' +
            '</div>' +
            '<div class="modal_body">' +
            '<div class="modal_form_container message_form_box" parent_element="'+this.questionObject.parentAnswer+'" ' +
            'parent_quest="'+this.questionObject.parentQuestion+'" ' +
            'survey_crypt="'+this.questionObject.surveyCrypt+'"' +
            'message_crypt="'+UniqeGenerator.getKey()+'">' +
            ' <div class="form-group">' +
            '<textarea id="message_for_ans_quest" name="message_for_ans_quest"></textarea>' +
            '  </div>' +
            '</div>' +
            '<div class="modal_form_footer">' +
            '<button type="button" class="btn btn-primary new_question_add">שמור</button>' +
            '</div>' +
            '</div>' +
            '</div>';
        return formHtml;
    }
}
