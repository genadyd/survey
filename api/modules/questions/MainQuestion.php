<?php
/**
 * Created by PhpStorm.
 * User: Genady
 * Date: 10/23/19
 * Time: 5:41 PM
 */


namespace Modules\Questions;


use DBprocessor\Processor\SmartFormProcessor;

class MainQuestion
{
    protected $form_data;
    protected $DB ;
    public function __construct($form_data)
    {
        $this->form_data = $form_data;
        $this->DB = new SmartFormProcessor('smartform');
    }

    public function getQuestionElementsTypes(){
    $query = 'SELECT * FROM sf_elements_types WHERE parent_block = 0  ';
    $res = $this->DB->query($query, array(),true);
    return json_encode($res);
}
public function questionsSave(){
   if(count($this->form_data['questions'])==0) return;
   foreach ($this->form_data['questions'] as $key => $question){
       $crypt = htmlspecialchars($key);
       $syrvey_crypt = htmlspecialchars($question['SurveyCrypt']);
       $previus_question_crypt = htmlspecialchars($question['PreviusQuestionCrypt']);
       $previus_answer_crypt = htmlspecialchars($question['PreviusAnswerCrypt']);
       $question_text = htmlspecialchars($question['QuestionText']);
       $question_next_action = htmlspecialchars($question['QuestionNextAction']);

       $query = "INSERT INTO sf_questions (crypt, syrvey_crypt, previus_question_crypt, previus_answer_crypt, question_text, question_next_action) 
                 VALUES ( :CRYPT, :SURVEY_CRYPT, :PREVIUS_QUESTION_CRYPT, :PREVIUS_ANSWER_CRYPT, :QUESTION_TEXT, :QUESTION_NEXT_ACTION )";
       $params = array(
           ":CRYPT" => array('val'=>$crypt, 'type'=>\PDO::PARAM_STR),
           ":SURVEY_CRYPT" => array('val'=>$syrvey_crypt, 'type'=>\PDO::PARAM_STR),
           ":PREVIUS_QUESTION_CRYPT" =>array('val'=> $previus_question_crypt, 'type'=>2),
           ":PREVIUS_ANSWER_CRYPT" => array('val'=>$previus_answer_crypt,'type'=>2),
           ":QUESTION_TEXT" => array('val'=>$question_text, 'type' => 2),
           ":QUESTION_NEXT_ACTION" => array('val'=>$question_next_action, 'type'=>2)
       );
       $res = $this->DB->query($query, $params);

   }
    return var_dump($res);

}
}
