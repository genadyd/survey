import {Model} from "./Model.js";

export class Controller{
    constructor(objectForSave){
        this.Model = new Model();
        this.Model.createQuestionObject();
        this.Model.createAnswersObject();
    }
}