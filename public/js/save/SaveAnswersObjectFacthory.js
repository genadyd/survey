import {QuestionFormNewAnswersSave} from "./answers_object_builders/QuestionFormNewAnswersSave.js";


export class SaveAnswersObjectFacthory {
    constructor(saveType){
        this.saveType = saveType;
    }
    createObject(){
        let obj;
        switch (this.saveType ) {
            case 'question_container':
                obj = new QuestionFormNewAnswersSave()

        }
        obj.objectBuilder();
        return obj.AnswersObjForSave
    }
}