import {AjaxSender} from "../ajax/AjaxSender.js";
import {Model as questionModel} from "./Model.js";
import {Ui as questionUi} from "./Ui.js";
import {NewQuestionForm} from "../Modals/modals_behaviors/NewQuestionForm.js";
import {NewQuestionModal} from "../Modals/NewQuestionModal.js";
import {MessageForm} from "../Modals/modals_behaviors/MessageForm.js";
import {MessageModal} from "../Modals/MessageModal.js";


export class Controller {
    constructor(){
        this.Model =new questionModel();
        this.Ui = new questionUi()
        this.AjaxSender = new AjaxSender()
        this.getQuestionsElements();
        // this.QuestionSaveFromMainPage();
}
getQuestionsElements(){
$('#question_form_container').on('click','.question_form_box .answers_types_open_close:not(.types_oppened)', (e)=>{
    let button = e.target,
        jsonObject = this.Model.formJsonBuilder();
        jsonObject.module = 'forms_elements'
        jsonObject.func = 'getList';
    let ajax = new AjaxSender(jsonObject);
    ajax.AjaxSend().then(res => {
        this.Ui.getQuestionsElements(res)
    });
})
    $('#question_form_container').on('click','.question_form_box .answers_types_open_close.types_oppened', (e)=>{
        let button = $(e.target);
        this.Ui.closeTypesElementsBox(button);

    })
}
    questionActProcessing(){
        $('#question_form_container').on('change','.quest_next_act',(e) => {
            let select = $(e.target),
                selectValue = select.val(),
                elementBox = select.closest('.question_form_box'),
                elementObject = {
                    parentQuestion:elementBox.attr('question_crypt'),
                    parentAnswer:'0',
                    surveyCrypt:$('#survey_form').attr('survey_crypt'),
                    parentBoxCrypt:"0",
                    parentAnswerTitle:'',
                    parentQuestionTitle:$('#question_name').val(),
                    select: select
                }
            let modalShowBehavior ='',
                showModalForm = '';
            switch (selectValue) {
                case 'create_new_quest':/*new question*/
                    modalShowBehavior = new NewQuestionForm(elementObject);
                    showModalForm = new NewQuestionModal(elementObject, modalShowBehavior);
                    break;
                case 'end_survey_with_mess':/*end survey with senks message*/
                    modalShowBehavior = new MessageForm(elementObject);
                    showModalForm = new MessageModal(elementObject, modalShowBehavior);
                    break;
            }
            showModalForm.modalShow();
        })
    }
}
