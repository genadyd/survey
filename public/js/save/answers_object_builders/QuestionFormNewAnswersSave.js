import {SuperAnswersSaveObject} from "./SuperAnswersSaveObject.js";

export class QuestionFormNewAnswersSave extends SuperAnswersSaveObject{
    objectBuilder(){
        let boxContainer = $('.answers_box'),
            surveyCrypt = $('#survey_form').attr('survey_crypt'),
            questionCrypt = $('.question_form_box ').attr('question_crypt'),
            answersElements = boxContainer.find('.answers_forms_container .one_element_box:not([sub_type=box])'),
            that = this;
        that.AnswersObjForSave['answers'] = {};
        $.each(answersElements, function () {
            let answerCrypt = $(this).attr('element_key');
            that.AnswersObjForSave['answers'][answerCrypt] = {
                'AnswerCrypt':answerCrypt,
                'QuestionCrypt':$(this).attr('question_crypt'),
                'AnswerTypeCrypt':$(this).attr('element_type_crypt'),
                'BoxCrypt':$(this).attr('box_crypt')||'0',
                'AnswerText':$(this).find('.answer_title input').val(),
                'SurveyCrypt': surveyCrypt,
                'BoxTypeCrypt':$(this).closest('.one_element_box[sub_type=box]').attr('element_type_crypt')||'0',
                'NextAct':$(this).find('.next_act_select').val()||'0'
            }
        })

    }
}
