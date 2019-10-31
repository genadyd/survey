export class SuperQuestionsSaveObject {
    constructor(){
        if(this.QuestionsObjForSave == undefined) {
            this.QuestionsObjForSave = {};
        }
        if(this.QuestionsObjForSave['questions']==undefined){
            this.QuestionsObjForSave['questions'] = {}
        }
}
    objectBuilder(){
    //    this is abstract func must reload it
    }
}