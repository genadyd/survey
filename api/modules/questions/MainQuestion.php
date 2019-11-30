<?php
/**
 * Created by PhpStorm.
 * User: Genady
 * Date: 10/23/19
 * Time: 5:41 PM
 */


namespace Modules\Questions;


use DBprocessor\Processor\SmartFormProcessor;
use Modules\Questions\ShowBuilder\QuestObjectShowBuilder;

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
//       get new Order
       $question_order = $this->getOrder();


       $query = "INSERT INTO sf_questions (crypt, syrvey_crypt, previus_question_crypt, previus_answer_crypt, question_text, question_next_action, question_order) 
                 VALUES ( :CRYPT, :SURVEY_CRYPT, :PREVIUS_QUESTION_CRYPT, :PREVIUS_ANSWER_CRYPT, :QUESTION_TEXT, :QUESTION_NEXT_ACTION , :QUEST_ORDER )";
       $params = array(
           ":CRYPT" => array('val'=>$crypt, 'type'=>\PDO::PARAM_STR),
           ":SURVEY_CRYPT" => array('val'=>$syrvey_crypt, 'type'=>\PDO::PARAM_STR),
           ":PREVIUS_QUESTION_CRYPT" =>array('val'=> $previus_question_crypt, 'type'=>2),
           ":PREVIUS_ANSWER_CRYPT" => array('val'=>$previus_answer_crypt,'type'=>2),
           ":QUESTION_TEXT" => array('val'=>$question_text, 'type' => 2),
           ":QUESTION_NEXT_ACTION" => array('val'=>$question_next_action, 'type'=>2),
           ":QUEST_ORDER" => array('val'=>$question_order, 'type'=>1)
       );
       $res = $this->DB->query($query, $params);

   }
    return var_dump($res);

}
protected function getAllQuestionsBySurveyCrypt(){
        $query = "SELECT * FROM sf_questions WHERE syrvey_crypt = :SUR_CRYPT ";
        $params = array(
            ":SUR_CRYPT" => array('val'=>$this->form_data['survey_crypt'], 'type'=>\PDO::PARAM_STR)
        );
    $res = $this->DB->query($query, $params, true);
    return $res;
}
public function getQuestionsAnswersObjectForPresentation(){
        $res = $this->getAllQuestionsBySurveyCrypt();
    $questions_array = array();
    if(count($res)>0) {
        foreach ($res as $key => $val) {
            $builder = new QuestObjectShowBuilder($val);
            $questions_array[$key] = $builder->exequte();
        }
    }
    return $questions_array;
}
protected function getOrder(){
       $query = "SELECT question_order FROM sf_questions ORDER BY question_order DESC  LIMIT 1 ";
    $res = $this->DB->query($query, array());
    if($res) return $res['question_order']+1;
    return 1;
}
}
