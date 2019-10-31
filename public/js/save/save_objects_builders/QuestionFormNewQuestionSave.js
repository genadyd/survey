import {SuperQuestionsSaveObject} from "./SuperQuestionsSaveObject.js";

export class QuestionFormNewQuestionSave extends SuperQuestionsSaveObject{

    objectBuilder(){
         let formContainer = $('.question_form_box '),
             question = formContainer.attr('question_crypt');
        this.QuestionsObjForSave['questions'][question]={
            'SurveyCrypt':$('#survey_form').attr('survey_crypt'),
            'QuestionCrypt': question,
            'PreviusQuestionCrypt':formContainer.attr('parent_quest'),
            'PreviusAnswerCrypt':formContainer.attr('parent_element'),
            'QuestionText':formContainer.find('#question_name').val(),
            'QuestionNextAction':formContainer.find('#quest_next_act').val()
        };

    }
}