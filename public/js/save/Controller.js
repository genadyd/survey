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
            this.Model.saveAjaxSender(saveQuestionsObj);/*Send Question Object to Save*/
            //==================================================================
            //prepare Answers Object to save======================================
            saveAnsObj['func'] = 'answersSave';
            saveAnsObj['module'] = 'answers';
            saveAnsObj['class'] = 'Answer';
            this.Model.saveAjaxSender(saveAnsObj);/*Send Answers Object to Save*/
        } )
    }
}
