<?php
/**
 * Created by PhpStorm.
 * User: Genady
 * Date: 11/19/19
 * Time: 11:27 PM
 */


namespace Modules\Questions\ShowBuilder;


use Modules\Answers\Answer;

abstract class  MainShowBuilder
{
   protected $question_answer_object, $answers_object = array();
   public function __construct(array $question_object)
   {
       $this->question_answer_object = $question_object;
   }
   protected function getAnsversByQuestionCrypt($question_crypt){
       $ans = new Answer();
       return $ans->getAnswersListByQuestionId($question_crypt);
   }
   protected function mergeObjects($answer_object){
       $this->question_answer_object['answers'] = $answer_object;
   }
   public function exequte(){
       $this->mergeObjects($this->getAnsversByQuestionCrypt($this->question_answer_object['crypt']));
       return $this->question_answer_object;
   }
}
