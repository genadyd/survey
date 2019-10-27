export class MasterAnswerSave{
    constructor(){
        if(window.AnswerObject == undefined){
            window.AnswerObject = {};
        }
    }
    static instance;
    static SaveAnsver(){
        if(MasterAnswerSave.instance == undefined){
            MasterAnswerSave.instance = new MasterAnswerSave()
        }
        return MasterAnswerSave.instance;
    }

      saveAnswerObject(crypt, title='',AnswerTypeCrypt='', surveyCrypt='', parentQuestion='', afterAct=''){
        if(window.AnswerObject[crypt] == undefined){
            window.AnswerObject[crypt];
        }
        if(title !='') window.AnswerObject[crypt].AnswerTitle = title;
        if(AnswerTypeCrypt !='') window.AnswerObject[crypt].AnswerTypeCrypt = AnswerTypeCrypt;
        if(surveyCrypt !='') window.AnswerObject[crypt].surveyCrypt = surveyCrypt;
        if(parentQuestion !='') window.AnswerObject[crypt].AnswerParentQuestion = parentQuestion;
        if(afterAct !='') window.AnswerObject[crypt].AnswerAfterAct = afterAct;
    }
    saveAnswerObjectElement(crypt, objectField, value=''){
        if(window.AnswerObject[crypt] == undefined){
            window.AnswerObject[crypt];
        }
        if(value !='') window.AnswerObject[crypt][objectField] = value;
    }
}
