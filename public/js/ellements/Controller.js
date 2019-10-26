import {Model} from "./Model.js";
import {TextElementFormShow} from "./behaviors/TextElementFormShow.js";
import {CheckboxElementFormShow} from "./behaviors/CheckboxElementFormShow.js";
import {RadioElementFormShow} from "./behaviors/RadioElementFormShow.js";
import {TextElement} from "./elements_processing/TextElement.js";
import {BoxElement} from "./elements_processing/BoxElement.js";
import {RadioElement} from "./elements_processing/RadioElement.js";
import {BoxElementFormShow} from "./behaviors/BoxElementFormShow.js";
import {NewQuestionForm} from "../Modals/modals_behaviors/NewQuestionForm.js";
import {NewQuestionModal} from "../Modals/NewQuestionModal.js";
import {MessageModal} from "../Modals/MessageModal.js";
import {MessageForm} from "../Modals/modals_behaviors/MessageForm.js";
import {UniqeGenerator} from "../Lib/UniqeGenerator.js";

export class Controller{
    constructor(){
        this.Model = new Model();
        this.getOneElementForm();
        this.addElementToBoxSubtypeBox();
        this.elementActProcessing();
    }
    getOneElementForm(){
        $('#question_form_container').on('click', '.types_container button', (e)=>{
            let button = $(e.target),
                elementType = button.attr('element_type'),
                elementObject = {
                    elementType:elementType,
                    elementTypeCrypt: button.attr('type_crypt'),
                    elementTypeTitle:button.text(),
                    elementCrypt:UniqeGenerator.getKey(),
                    elementQuestionCrypt:button.closest('.question_form_box').attr('question_crypt'),
                    surveyCrypt:$('#survey_form').attr('survey_crypt'),
                    button: button

                }
            let showBehavior ='',
                curentElement = '';
            switch (elementType) {
                case 'text':
                    showBehavior = new TextElementFormShow(elementObject);
                    curentElement = new TextElement({button: button},showBehavior);
                    break;
                case 'email':
                    showBehavior = new TextElementFormShow(elementObject);
                    curentElement = new TextElement({button: button},showBehavior);
                    break;
                case 'tel':
                    showBehavior = new TextElementFormShow(elementObject);
                    curentElement = new TextElement({button: button},showBehavior);
                    break;
                case 'checkbox':
                    showBehavior = new CheckboxElementFormShow(elementObject);
                    curentElement = new TextElement({button: button},showBehavior);
                    break;
                case 'radio_box':
                    showBehavior = new BoxElementFormShow(elementObject);
                    curentElement = new BoxElement(elementObject, showBehavior);
                    break;
                case 'select_container':
                    showBehavior = new BoxElementFormShow(elementObject);
                    curentElement = new BoxElement(elementObject, showBehavior);
                    break;
            }
            curentElement.formShow();
        })
    }
    addElementToBoxSubtypeBox(){
        $('#question_form_container').on('click', '.one_element_box[sub_type=box] .ans_container .add_element_button button', (e)=>{
            let button = $(e.target),
                elementType = button.attr('element_type'),
                elementObject = {
                    elementType:elementType,
                    elementTypeCrypt: button.attr('type_crypt'),
                    elementTypeTitle:button.text(),
                    elementQuestionCrypt:button.closest('.question_form_box').attr('question_crypt'),
                    surveyCrypt:$('#survey_form').attr('survey_crypt'),
                    button: button
                }
            let showBehavior ='',
                curentElement = '';
            switch (elementType) {
                case 'radio':
                    showBehavior = new RadioElementFormShow(elementObject);
                    curentElement = new RadioElement({button: button}, showBehavior);
                    break;
                case 'option':
                    showBehavior = new RadioElementFormShow(elementObject);
                    curentElement = new RadioElement({button: button}, showBehavior);
                    break;
            }
            curentElement.formShow();
        })
    }
    elementActProcessing(){
        $('#question_form_container').on('change','.next_act_select',(e) => {
            let select = $(e.target),
                selectValue = select.val(),
                elementBox = select.closest('.one_element_box'),
                parentAnswerTitle = elementBox.find('.answer_title input').val(),
                elementObject = {
                    parentQuestion:elementBox.attr('question_crypt'),
                    parentAnswer:elementBox.attr('element_key'),
                    surveyCrypt:$('#survey_form').attr('survey_crypt'),
                    parentBoxCrypt:elementBox.attr('box_crypt')||0,
                    parentAnswerTitle:parentAnswerTitle != ''? parentAnswerTitle :'כותרת התשובה לא מוצהרת',
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
