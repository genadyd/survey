import {SaveQuestionObjectFacthory} from "./SaveQuestionObjectFacthory.js";
import {SaveAnswersObjectFacthory} from "./SaveAnswersObjectFacthory.js";

export class Controller {
    constructor(){
           this.mainPageSaveGetObject();
    }
    mainPageSaveGetObject(){
        $('#question_form_container').on('click', '.new_question_add',(e)=>{
            let saveButton = $(e.target),
                attr = saveButton.attr('save_attr'),
                fact = new SaveQuestionObjectFacthory(attr),
                answersFacthory = new SaveAnswersObjectFacthory(attr),
                saveObj = fact.createObject(),
                saveAnsObj = answersFacthory.createObject();
            console.log(saveAnsObj);
        } )
    }
}