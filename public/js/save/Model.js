import {AjaxSender} from "../ajax/AjaxSender.js";

export class Model {
    constructor(){

    }
    saveAjaxSender(obj){
        let ajax = new AjaxSender(obj);
        ajax.AjSender('json');
    }
    answersSaveAjaxSender(obj){
        let ajax = new AjaxSender(obj);
        ajax.AjSender('json');
    }
}
