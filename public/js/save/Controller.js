import {SaveQuestionObjectFacthory} from "./SaveQuestionObjectFacthory.js";
import {SaveAnswersObjectFacthory} from "./SaveAnswersObjectFacthory.js";
import {Model} from "./Model.js";

export class Controller {
    constructor(){
           this.Model = new Model()
           this.mainPageSaveGetObject();
    }
    mainPageSaveGetObject(){
        $('#question_form_container').on('click', '.new_question_add',(e)=>{
            let saveButton = $(e.target),
                attr = saveButton.attr('save_attr'),
                questionsFactory = new SaveQuestionObjectFacthory(attr),
                answersFacthory = new SaveAnswersObjectFacthory(attr),
                saveQuestionsObj = questionsFactory.createObject(),
                saveAnsObj = answersFacthory.createObject();
            //prepare Question Object to save======================================
            saveQuestionsObj['func'] = 'questionsSave';
            saveQuestionsObj['module'] = 'questions';
            saveQuestionsObj['class'] = 'Question';
            this.Model.questionSaveAjaxSender(saveQuestionsObj);/*Send Quesrion Object to Save*/
            //==================================================================
            console.log(saveQuestionsObj);
            console.log(saveAnsObj);
        } )
    }
}