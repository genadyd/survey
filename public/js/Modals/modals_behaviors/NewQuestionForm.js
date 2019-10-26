import {UniqeGenerator} from "../../Lib/UniqeGenerator.js";
import {ModalBehavior} from "./ModalBehavior.js";

export class NewQuestionForm extends ModalBehavior{

    getFormHtml(){
        let formHtml = '<div class="modal_container">' +
            '<div class="modal_header">' +
            '<div class="modal_heading">ליצור שאלה ל: ' +this.questionObject.parentAnswerTitle+ '</div>' +
            '<div class="modal_closer">' +
            '<i class="fas fa-times"></i>' +
            '</div>' +
            '</div>' +
            '<div class="modal_body">' +
            '<div class="modal_form_container question_form_box" parent_element="'+this.questionObject.parentAnswer+'" ' +
            'parent_quest="'+this.questionObject.parentQuestion+'" ' +
            'survey_crypt="'+this.questionObject.surveyCrypt+'"' +
            'question_crypt="'+UniqeGenerator.getKey()+'">' +
            ' <div class="form-group">' +
            '    <label for="modal_question_name"></label>' +
            '    <input type="text" class="form-control" id="modal_question_name"  placeholder="שאלה">' +
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
