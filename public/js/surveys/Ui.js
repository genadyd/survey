import {UniqeGenerator} from "../Lib/UniqeGenerator.js";
import {Ui as SurUi} from "../questions/Ui.js";


export class Ui {
     newSurveySave(jsonObj){
        let listHtml ='<div class="one_survey bg-light" survey_crypt="'+jsonObj.survey_crypt+'">' ;
         listHtml+='<div class="survey_box_header" >';
         listHtml+= '<div class="sort_icon"><i class="material-icons">swap_vert</i></div>';
         listHtml+='<div class="name_box">'+jsonObj.survey_name+'</div>';
         listHtml+='<div class="controls_box">';
         listHtml+= '<div class="controll_button settings_button">הגדרות</div>';
         listHtml+= '<div class="controll_button edit_button">ערוך</div>';
         listHtml+= '<div class="controll_button remove_button">הסר</div>';

         listHtml+='</div>';
         listHtml+='</div>'
         listHtml+='<div class="descript_box">' +
             '<p>'+jsonObj.survey_description+'</p>' +
             '<div class="drag_icon_box"></div>'
             '</div>';
         listHtml+= '</div>';
         let formContainer = $('#survey_form'),
             questionContainer = $('#question_form_container'),
             surveyNameBox = '<span class="survey_editor_head_name text-primary"> '+jsonObj.survey_name+'</span>';
         formContainer.attr('survey_crypt', jsonObj.crypt)
             .find('.survay_form_header .heading').html('שינוי נתוני שאלון :'+surveyNameBox)
             .end().find('.new_form_save').removeClass('new_form_save').addClass('edit_form_save');
         $('#surveys_list_container .survey_list').prepend(listHtml);
         $('#survey_form').addClass('hidden');
     }
     getSurveysList(surveysJson){
         let listHtml = '';
         // surveysJson = JSON.parse(surveysJson);
         for(let i=0; i< surveysJson.length; i++){
             listHtml+='<div class="one_survey" survey_crypt="'+surveysJson[i].crypt+'">' ;
             listHtml+='<div class="survey_box_header" >';
             listHtml+= '<div class="sort_icon"><i class="material-icons">swap_vert</i></div>';
             listHtml+='<div class="name_box">'+surveysJson[i].survey_name+'</div>';
             listHtml+='<div class="controls_box">';
             listHtml+= '<div class="controll_button settings_button">הגדרות</div>';
             listHtml+= '<div class="controll_button edit_button">ערוך</div>';
             listHtml+= '<div class="controll_button remove_button">הסר</div>';

             listHtml+='</div>';
             listHtml+='</div>';
             listHtml+='<div class="descript_box"><p>'+surveysJson[i].survey_description+'</p></div>';
             listHtml+= '</div>';
         }
         $('#surveys_list_container .survey_list').append(listHtml)
     }
     surEditorInit(survayJson){
    let formContainer = $('#survey_form'),
        questionContainer = $('#question_form_container'),
    surveyNameBox = '<span class="survey_editor_head_name"> '+survayJson.survey_name+'</span>';
    formContainer.attr('survey_crypt', survayJson.crypt)
        .find('#survey_name').val(survayJson.survey_name).end()
        .find('#survey_description').val(survayJson.survey_description).end()
        .find('.survay_form_header .heading').html('שינוי נתוני שאלון :'+surveyNameBox)
        .end().find('.new_form_save').removeClass('new_form_save').addClass('edit_form_save');
         $('#surveys_list_container').find('.one_survey').removeClass('bg-light');
        $('#surveys_list_container').find('.one_survey[survey_crypt='+survayJson.crypt+']').addClass('bg-light');
         if (formContainer.is('.hidden')) {
             formContainer.removeClass('hidden');
         }
     }
     newSurveyFormInit() {
         let container = $('#survey_form'),
             newSurveyKey = UniqeGenerator.getKey();
         if (container.is('.hidden')) {
             container.removeClass('hidden');
         }
         container.attr('survey_crypt', newSurveyKey).find('#survey_name').val('').end()
             .find('#survey_description').val('').end()
             .find('.survay_form_header .heading').text('הסיף שאלון חדש')
             .end().find('.edit_form_save').removeClass('edit_form_save').addClass('new_form_save');
         // $('#surveys_list_container').find('.one_survey').removeClass('bg-light');

     }
     editSurveySave(survayJson){
         let formContainer = $('#survey_form'),
             surveyNameBox = '<span class="survey_editor_head_name"> '+survayJson.survey_name+'</span>',
             questionContainer = $('#question_form_container');
             formContainer.find('.survay_form_header .heading').html('שינוי נתוני שאלון :'+surveyNameBox);
             $('#surveys_list_container .one_survey[survey_crypt='+survayJson.survey_crypt+']').find('.name_box').text(survayJson.survey_name).end()
                 .find('.descript_box p').text(survayJson.survey_description);
     }
     surveyDelete(survayJson){
             $('#surveys_list_container').find('.one_survey[survey_crypt=' + survayJson.survey_crypt + ']').remove();
             let form_crypt = $('#survey_form').attr('survey_crypt') || 0;
         }

 }
