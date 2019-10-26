import {AjaxSender} from "../ajax/AjaxSender.js";
import {Model as questionModel} from "./Model.js";
import {Ui as questionUi} from "./Ui.js";

export class Controller {
    constructor(){
        this.Model =new questionModel();
        this.Ui = new questionUi()
        this.AjaxSender = new AjaxSender()
        this.getQuestionsElements();
}
getQuestionsElements(){
$('#question_form_container').on('click','.question_form_box .answers_types_open_close:not(.types_oppened)', (e)=>{
    let button = e.target,
        jsonObject = this.Model.formJsonBuilder();
        jsonObject.func = 'getQuestionElementsTypes';
        jsonObject.collback = this.Ui.getQuestionsElements;
    let ajax = new AjaxSender(jsonObject);
    ajax.AjSender('json');
})
    $('#question_form_container').on('click','.question_form_box .answers_types_open_close.types_oppened', (e)=>{
        let button = $(e.target);
        this.Ui.closeTypesElementsBox(button);

    })
}

}
