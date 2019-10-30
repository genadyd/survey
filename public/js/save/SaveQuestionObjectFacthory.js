import {QuestionFormNewQuestionSave} from "./save_objects_builders/QuestionFormNewQuestionSave.js";

export class SaveQuestionObjectFacthory {
    constructor(saveType){
        this.saveType = saveType;
    }
    createObject(){
        let obj;
        switch (this.saveType ) {
            case 'question_container':
                obj = new QuestionFormNewQuestionSave();

        }
        obj.objectBuilder();
        return obj.objForSave
    }
}