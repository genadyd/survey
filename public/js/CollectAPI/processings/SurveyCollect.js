import {MasterCollect} from "./MasterCollect.js";

export class SurveyCollect extends MasterCollect{

    add() {
        // console.log(this.object)
        window.SurveysObject[this.object.crypt] = {
            'name' : this.object.survey_name,
            'desctiption' : this.object.survey_description,
            'survey_order': this.object.survey_order
        }
    }
    change(){
        window.SurveysObject[this.object.crypt] = {
            'name' : this.object.name,
            'desctiption' : this.object.survey_description
        }
    }
    delete() {
       delete window.SurveysObject[this.object.crypt]
    }
}
