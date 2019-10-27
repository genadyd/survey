export class MasterAnswerSave{
    constructor(ObjectForSave){
        this.ObjectForSave = ObjectForSave;
    }
    saveAnswer(){
        let crypt = this.ObjectForSave['crypt']||'0',/*TODO after tests : if crypt Not Exists Create Unique*/
            title = this.ObjectForSave['AnswerTitle'],
            surveyCrypt = this.ObjectForSave['AnswerSurvey'],
            parentQuestion = this.ObjectForSave['parentQuestion'],
            afterAct = this.ObjectForSave['afterAct']
        window.QuestionObject[crypt] = {
            AnswerTitle: title,
            AnswerSurvey: surveyCrypt,
            AnswerParentQuestion:preventQuestion,
            AnswerAfterAct:afterAct
        }
    }
}