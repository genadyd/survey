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
        this.questionPageInit();
        window.QuestionObject = {}
}
questionPageInit(){
       $('#surveys_list_container').on('click','.one_survey .settings_button', (e)=> {
           const that = e.target;
          this.Ui.questionSectionInit()
       }) 
}


}
