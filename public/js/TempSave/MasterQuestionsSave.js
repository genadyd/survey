export class MasterQuestionsSave {
    constructor(){
        if(window.QuestionObject == undefined){
            window.QuestionObject = {};
        }
    }
    static instance;
    static SaveQuestion(){
        if(MasterQuestionsSave.instance == undefined){
            MasterQuestionsSave.instance = new MasterQuestionsSave();
        }
        return MasterQuestionsSave.instance;
    }
    saveQuestionObject(crypt, title='',previusAnswerCrypt='', previusQuestionCrypt = '', surveyCrypt='', afterAct=''){
        if(window.QuestionObject[crypt] == undefined){
            window.QuestionObject[crypt]={};
        }
        if(title !='') window.QuestionObject[crypt]['QuestionTitle'] = title;
        if(previusAnswerCrypt !='') window.QuestionObject[crypt]['previusAnswerCrypt'] = previusAnswerCrypt;
        if(previusQuestionCrypt !='') window.QuestionObject[crypt]['previusQuestionCrypt'] = previusQuestionCrypt;
        if(surveyCrypt !='') window.QuestionObject[crypt]['surveyCrypt'] = surveyCrypt;
        if(afterAct !='') window.QuestionObject[crypt]['QuestionAfterAct'] = afterAct;
        }

    saveQuestionObjectElement(crypt, objectField, value=''){
        if(window.QuestionObject[crypt] == undefined){
            window.QuestionObject[crypt]={};
        }
        if(value !='') window.QuestionObject[crypt][objectField] = value;
    }

}
