
import {Controller as SurController} from "./surveys/Controller.js";
import {Controller as questionController} from "./questions/Controller.js";
import {Controller as elementsController} from "./ellements/Controller.js";
import {Controller as SaveController} from "./save/Controller.js";
import {Ui} from "./Ui/Ui.js";

$(function () {
    let general = new General();
})
class General {
    constructor(){
        this.surveyController = new SurController();
        this.questionController = new questionController();
        this.elementController = new elementsController();
        this.saveController = new SaveController();
        // this.skeditorInit();
        this.surOppenList();
    }
    skeditorInit(){
        CKEDITOR.replace('thanks_text', {
            contentsLangDirection:'rtl',
            language:'he'
        });
    }
    // Open Close Surveys list
    surOppenList(){
        let ui = new Ui();
        ui.survaysListContainerOppenClose()
    }

}
