import {QuestionFormNewSave} from "./save_objects_builders/QuestionFormNewSave.js";

export class SaveObjectFacthory {
    constructor(saveType){
        this.saveType = saveType;
    }
    createObject(){
        let obj;
        switch (this.saveType ) {
            case 'questionContainerForm':
                obj = new QuestionFormNewSave();
        }
        return obj.objForSave
    }
}