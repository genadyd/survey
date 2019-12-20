/*
*
* factories class
* collect processing init
* */
import {AnswersCollect} from "./processings/AnswersCollect.js";
import {QuestionsCollect} from "./processings/QuestionsCollect.js";
import {SurveyCollect} from "./processings/SurveyCollect.js";

export class CollectApi{
     static tempSaveObjectProcessing(type, event, object = {}){
         let collector = '';
         if(type == 'answer' ){
             collector = new AnswersCollect(object)
         }else if (type == 'question'){
             collector = new QuestionsCollect(object)
         }else if (type == 'survey'){
             collector = new SurveyCollect(object)
         }
         else{
             console.error('Type is not valid!!!')
         }
         if(event == 'add'){
             collector.add();
         }else if(event == 'change'){
             collector.change()
         }else if(event == 'delete'){
             collector.delete();
         }
         else(console.error('Action is not valid'))

     }
}
