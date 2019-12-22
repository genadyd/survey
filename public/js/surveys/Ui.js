import {UniqeGenerator} from "../Lib/UniqeGenerator.js";
import {Ui as SurUi} from "../questions/Ui.js";


export class Ui {
     newSurveySave(jsonObj){
        let listHtml ='<div class="one_survey bg-light" survey_crypt="'+jsonObj.survey_crypt+'">' ;
         listHtml+='<div class="controls_box">';
         listHtml+= '<i class="far fa-edit text-info survey_edit_init"></i>';
         listHtml+= '<i class="far fa-trash-alt text-danger survey_remove_init"></i>';
         listHtml+='</div>';
         listHtml+='<div class="name_box">'+jsonObj.survey_name+'</div>';
         listHtml+= '</div>';
         let formContainer = $('#survey_form'),
             questionContainer = $('#question_form_container'),
             surveyNameBox = '<span class="survey_editor_head_name text-primary"> '+jsonObj.survey_name+'</span>';
         formContainer.attr('survey_crypt', jsonObj.crypt)
             .find('.survay_form_header .heading').html('שינוי נתוני שאלון :'+surveyNameBox)
             .end().find('.new_form_save').removeClass('new_form_save').addClass('edit_form_save');
         $('#surveys_list_container .survey_list').prepend(listHtml);
         let questionCrypt = UniqeGenerator.getKey();
         questionContainer.find('.question_form_box').attr('question_crypt', questionCrypt);
         if (questionContainer.is('.hidden')) {
             questionContainer.removeClass('hidden');
         }

     }
     getSurveysList(surveysJson){
         let listHtml = '';
         // surveysJson = JSON.parse(surveysJson);
         for(let i=0; i< surveysJson.length; i++){
             listHtml+='<div class="one_survey" survey_crypt="'+surveysJson[i].crypt+'">' ;
             listHtml+='<div class="controls_box">';
             listHtml+= '<i class="far fa-edit text-info survey_edit_init"></i>';
             listHtml+= '<i class="far fa-trash-alt survey_remove_init text-danger"></i>';
             listHtml+='</div>';
             listHtml+='<div class="name_box">'+surveysJson[i].survey_name+'</div>';
             listHtml+= '</div>';
         }
         $('#surveys_list_container .survey_list').append(listHtml)
     }
     surEditorInit(survayJson){
    let formContainer = $('#survey_form'),
        questionContainer = $('#question_form_container'),
    surveyNameBox = '<span class="survey_editor_head_name text-primary"> '+survayJson.survey_name+'</span>';
    formContainer.attr('survey_crypt', survayJson.crypt)
        .find('#survey_name').val(survayJson.survey_name).end()
        .find('.survay_form_header .heading').html('שינוי נתוני שאלון :'+surveyNameBox)
        .end().find('.new_form_save').removeClass('new_form_save').addClass('edit_form_save');
         $('#surveys_list_container').find('.one_survey').removeClass('bg-light');
        $('#surveys_list_container').find('.one_survey[survey_crypt='+survayJson.crypt+']').addClass('bg-light');
         let questionCrypt = UniqeGenerator.getKey();
         questionContainer.find('.question_form_box').attr('question_crypt',questionCrypt);
         if (formContainer.is('.hidden')) {
             formContainer.removeClass('hidden');
         }
         if (questionContainer.is('.hidden')) {
             questionContainer.removeClass('hidden');
         }
     }
     newSurveyFormInit() {
         let container = $('#survey_form'),
             newSurveyKey = UniqeGenerator.getKey();
         if (container.is('.hidden')) {
             container.removeClass('hidden');
         }
         container.attr('survey_crypt', newSurveyKey).find('#survey_name').val('').end()
             .find('.survay_form_header .heading').text('הסיף שאלון חדש')
             .end().find('.edit_form_save').removeClass('edit_form_save').addClass('new_form_save');
         // $('#surveys_list_container').find('.one_survey').removeClass('bg-light');

     }
     editSurveySave(survayJson){
         let formContainer = $('#survey_form'),
             surveyNameBox = '<span class="survey_editor_head_name text-primary"> '+survayJson.survey_name+'</span>',
             questionContainer = $('#question_form_container');
             formContainer.find('.survay_form_header .heading').html('שינוי נתוני שאלון :'+surveyNameBox);
             $('#surveys_list_container .one_survey[survey_crypt='+survayJson.survey_crypt+'] .name_box').text(survayJson.survey_name);
         if (questionContainer.is('.hidden')) {
             questionContainer.removeClass('hidden');
         }
     }
     surveyDelete(survayJson){
             $('#surveys_list_container').find('.one_survey[survey_crypt=' + survayJson.survey_crypt + ']').remove();
             let form_crypt = $('#survey_form').attr('survey_crypt') || 0;
             if (form_crypt != 0 && form_crypt == survayJson.survey_crypt) {
                 $('#survey_admin_navbar .new_sur_init').click();
             }
         }

 }
