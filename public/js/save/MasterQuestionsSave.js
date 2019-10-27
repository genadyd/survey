export class MasterQuestionsSave {
    constructor(ObjectForSave){
        this.ObjectForSave = ObjectForSave;
    }
    saveQuestion(){
        let crypt = this.ObjectForSave['crypt']||'0',/*TODO after tests : if crypt Not Exists Create Unique*/
            title = this.ObjectForSave['QuestionTitle'],
            surveyCrypt = this.ObjectForSave['QuestionSurvey'],
            preventAnswer = this.ObjectForSave['parentAnswer'],
            preventQuestion = this.ObjectForSave['preventQuestion'],
            afterAct = this.ObjectForSave['afterAct']
        window.QuestionObject[crypt] = {
            QuestionTitle: title,
            QuestionSurvey: surveyCrypt,
            QuestionPreventAnswer:preventAnswer,
            QuestionPreventQuestion:preventQuestion,
            QuestionAfterAct:afterAct
        }
    }
}