export class Model{
    createQuestionObject(){
       if(window.QuestionsObject == undefined){
           window.QuestionObject = {}
       }
    }
    createAnswersObject(){
        if(window.AnswersObject == undefined){
            window.AnswersObject = {}
        }
    }
}