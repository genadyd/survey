import {Model as SurveyModel} from "./Model.js";
import {AjaxSender} from "../ajax/AjaxSender.js";
import {Ui} from "./Ui.js";


export class Controller {
    constructor() {
        this.Ui = new Ui();
        this.Model = new SurveyModel();
        this.getSurveysList();
        this.newSurveySave();
        this.newSurveyFormInit();
        this.surEditorInit();
        this.surveyEditSave();
        this.surveyDelete();
    }

    newSurveyFormInit() {
        $('#survey_admin_navbar').on('click', '.new_sur_init', () => {
            this.Ui.newSurveyFormInit();
        })
    }

    newSurveySave() {
        $('#survey_form').on('click', '.survay_form_container .new_form_save', (e) => {
            let button = $(e.target),
                formContainer = button.closest('.survay_form_container');

            let jsonObject = this.Model.formJsonBuilder(formContainer);
            jsonObject.func = 'newSurveySave';
            jsonObject.collback = this.Ui.newSurveySave;
            let ajax = new AjaxSender(jsonObject);
            ajax.AjSender('json');
        })
    }

    getSurveysList() {
        let jsonObject = this.Model.formJsonBuilder();
        jsonObject.func = 'getSurveysList';
        jsonObject.collback = this.Ui.getSurveysList;
        let ajax = new AjaxSender(jsonObject);
        ajax.AjSender('json');
    }

    surEditorInit() {
        $('#surveys_list_container').on('click', '.one_survey .survey_edit_init', (e) => {
            let target = $(e.target),
                surveyCrypt = target.closest('.one_survey').attr('survey_crypt'),
                jsonObject = this.Model.formJsonBuilder();
            jsonObject.func = 'getOneSurvey';
            jsonObject.survey_crypt = surveyCrypt;
            jsonObject.collback = this.Ui.surEditorInit;

            let ajax = new AjaxSender(jsonObject);
            ajax.AjSender('json');
        })
    }

    surveyEditSave() {
        $('#survey_form').on('click', '.survay_form_container .edit_form_save', (e) => {
            let button = $(e.target),
                formContainer = button.closest('.survay_form_container');
             let jsonObject = this.Model.formJsonBuilder(formContainer);
            jsonObject.survey_thanks_text = jsonObject.thanks_text;
            jsonObject.survey_crypt = button.closest('#survey_form').attr('survey_crypt');
            jsonObject.func = 'editSurveySave';
            jsonObject.collback = this.Ui.editSurveySave;
            let ajax = new AjaxSender(jsonObject);
            ajax.AjSender('json');
        })
    }
    surveyDelete(){
        $('#surveys_list_container').on('click', '.one_survey .survey_remove_init', (e) => {
            if(confirm('האם אתה באמת רוצה למחוק את השאלון הזה')) {
                let target = $(e.target),
                    surveyCrypt = target.closest('.one_survey').attr('survey_crypt'),
                    jsonObject = this.Model.formJsonBuilder();
                jsonObject.func = 'removeOneSurvey';
                jsonObject.survey_crypt = surveyCrypt;
                jsonObject.collback = this.Ui.surveyDelete;

                let ajax = new AjaxSender(jsonObject);
                ajax.AjSender('json');
            }
        })
    }
}
