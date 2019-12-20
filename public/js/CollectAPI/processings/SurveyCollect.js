import {MasterCollect} from "./MasterCollect.js";

export class SurveyCollect extends MasterCollect{

    add() {
        // console.log(this.object)
        window.SurveysObject[this.object.crypt] = {
            'name' : this.object.survey_name
        }
    }
    change(){
        window.SurveysObject[this.object.crypt] = {
            'name' : this.object.name
        }
    }
    delete() {
       delete window.SurveysObject[this.object.crypt]
    }
}
