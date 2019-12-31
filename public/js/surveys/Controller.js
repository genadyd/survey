import {Model as SurveyModel} from "./Model.js";
import {AjaxSender} from "../ajax/AjaxSender.js";
import {Ui} from "./Ui.js";
import {Ui as SurUi} from "../questions/Ui.js";
import {CollectApi} from "../CollectAPI/CollectApi.js";
// import {SurveyObjectBuilder} from "../save_object_builder/SurveyObjectBuilder.js";


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
        this.surveyEditorFormClose();
        this.surveysSorting();

        window.SurveysObject = {}

    }
    surveysSorting(){
        $('.survey_list').sortable({stop: ()=> {
                this.surveysOrders()
            }
        });
    }
    surveysOrders(){
        let counter = 1;
        let surveys = document.getElementsByClassName('one_survey');
        let i = surveys.length-1;
        let ordersObj = {};
        const jsonObject ={'func':'saveOrders','module':'surveys' }
       for(; i >= 0; i--){
           ordersObj[surveys[i].getAttribute('survey_crypt')] = counter
          counter++
       }
        jsonObject['orders']=ordersObj
        let ajax = new AjaxSender(jsonObject);
        ajax.AjaxSend().then((res)=>{
        });

    }
    newSurveyFormInit() {
        $('#surveys_list_container').on('click', '.add_new_survey', () => {
            this.Ui.newSurveyFormInit();
        })
    }
    newSurveySave() {
        $('#survey_form').on('click', '.survay_form_container .new_form_save', (e) => {
            let button = $(e.target),
                formContainer = button.closest('.survay_form_container');
            let jsonObject = this.Model.formJsonBuilder(formContainer);
            jsonObject.func = 'save';
            jsonObject.survey_crypt = $('#survey_form').attr('survey_crypt');
            let ajax = new AjaxSender(jsonObject);
            ajax.AjaxSend().then((res)=>{
                this.Ui.newSurveySave(res)
                res['crypt'] = res.survey_crypt;
                CollectApi.tempSaveObjectProcessing('survey','add', res);
            });
        })
    }
    getSurveysList() {
        let jsonObject = this.Model.formJsonBuilder();
        jsonObject.func = 'getList';
        let ajax = new AjaxSender(jsonObject);
        ajax.AjaxSend().then((res)=>{
            this.Ui.getSurveysList(res)
            res.forEach((survey, index)=>{
                CollectApi.tempSaveObjectProcessing('survey','add', survey);
            })
            // let surBuilder = new SurveyObjectBuilder(res)
        });
    }
    surEditorInit() {
        $('#surveys_list_container').on('click', '.one_survey .edit_button', (e) => {
            let target = $(e.target),
                surveyCrypt = target.closest('.one_survey').attr('survey_crypt'),
                jsonObject = this.Model.formJsonBuilder();
            jsonObject.func = 'getSurveyQuestionAnswerObject';
            jsonObject.survey_crypt = surveyCrypt;
            let ajax = new AjaxSender(jsonObject);
            ajax.AjaxSend().then((res)=>{
                this.Ui.surEditorInit(res);
                if(res.questions.length > 0 ) {
                    let qUi = new SurUi();
                    qUi.questonsListHtmlBuilder(res.questions);
                }
            });
        })
    }
    surveyEditSave() {
        $('#survey_form').on('click', '.survay_form_container .edit_form_save', (e) => {
            let button = $(e.target),
                formContainer = button.closest('.survay_form_container');
             let jsonObject = this.Model.formJsonBuilder(formContainer);
            jsonObject.survey_thanks_text = jsonObject.thanks_text;
            jsonObject.survey_crypt = button.closest('#survey_form').attr('survey_crypt');
            jsonObject.func = 'edit';
            let ajax = new AjaxSender(jsonObject);
            ajax.AjaxSend().then(res=>{
                this.Ui.editSurveySave(res);
                CollectApi.tempSaveObjectProcessing('survey','change', {'crypt':res.survey_crypt,'name':res.survey_name});
            });
        })
    }
    surveyDelete(){
        $('#surveys_list_container').on('click', '.one_survey .remove_button', (e) => {
            if(confirm('האם אתה באמת רוצה למחוק את השאלון הזה')) {
                let target = $(e.target),
                    surveyCrypt = target.closest('.one_survey').attr('survey_crypt'),
                    jsonObject = this.Model.formJsonBuilder();
                jsonObject.func = 'delete';
                jsonObject.survey_crypt = surveyCrypt;
                jsonObject.collback = this.Ui.surveyDelete;

                let ajax = new AjaxSender(jsonObject);
                ajax.AjaxSend().then(res=>{
                    this.Ui.surveyDelete(res)
                    CollectApi.tempSaveObjectProcessing('survey','delete', {'crypt':res.survey_crypt});
                    this.surveysOrders();
                });
            }
        })
    }
    surveyEditorFormClose(){
        $('#survey_form').on('click', '.survay_form_header .survey_form_openclose' ,(e)=>{
            const closer = $(e.target),
            form = closer.closest('#survey_form'),
            formContainer = form.find('.survay_form_container');
                form.addClass('hidden');
                closer.closest('.survey_form_openclose').attr('title','הסתר את תיבת העריכה של הסקר');

        })
    }
}
