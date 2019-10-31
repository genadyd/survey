import {AjaxSender} from "../ajax/AjaxSender.js";

export class Model {
    constructor(){

    }
    questionSaveAjaxSender(obj){
        let ajax = new AjaxSender(obj);
        ajax.AjSender('json');
    }
}