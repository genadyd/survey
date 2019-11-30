<?php
/**
 * Created by PhpStorm.
 * User: Genady
 * Date: 10/24/19
 * Time: 7:04 PM
 */


namespace Modules\Answers;


use DBprocessor\Processor\SmartFormProcessor;

class MainAnswer
{
    protected $form_data;
    protected $DB ;
    public function __construct($form_data=array())
    {
        $this->form_data = $form_data;
        $this->DB = new SmartFormProcessor('smartform');
    }
    public function getTypeByboxId(){
        $box_crypt = htmlspecialchars($this->form_data['box_crypt']);
        $query = "SELECT * FROM sf_elements_types WHERE id = (SELECT has_elements FROM sf_elements_types WHERE crypt = :CRYPT)";
        $params = array(':CRYPT'=> array('val'=>$box_crypt,'type'=>\PDO::PARAM_STR));
//        return var_dump($params);
        $res = $this->DB->query($query, $params);
        $res['parent_box_type_crypt']=$this->form_data['box_crypt'];
        return json_encode($res);
    }
    public function answersSave(){
       if(count($this->form_data['answers'])==0) return;
       $query = "INSERT INTO sf_answers (crypt, answer_text, survey_crypt, question_crypt, answer_type_crypt, box_crypt, box_type_crypt, next_action, answer_order, CT)
 VALUES (:CRYPT, :ANSWER_TEXT, :SURVEY_CRYPT, :QUESTION_CRYPT, :ANSWER_TYPE_CRYPT, :BOX_CRYPT, :BOX_TYPE_CRYPT, :NEXT_ACTION, :ANS_ORDER, :CT ) ";
       foreach($this->form_data['answers'] as $key => $answer){
           $params = array(
               ':CRYPT'=>array(
                   'val'=>$key,
                   'type'=>2
               ), ':ANSWER_TEXT'=>array(
                   'val'=>$answer['AnswerText'],
                   'type'=>2
               ), ':SURVEY_CRYPT'=>array(
                   'val'=>$answer['SurveyCrypt'],
                   'type'=> 2
               ), ':QUESTION_CRYPT'=>array(
                   'val'=>$answer['QuestionCrypt'],
                   'type'=>2
               ), ':ANSWER_TYPE_CRYPT'=>array(
                   'val'=>$answer['AnswerTypeCrypt'],
                   'type'=>2
               ), ':BOX_CRYPT'=>array(
                   'val'=> $answer['BoxCrypt'],
                   'type'=>2
               ), ':BOX_TYPE_CRYPT'=>array(
                   'val'=>$answer['BoxTypeCrypt'],
                   'type'=>2
               ), ':NEXT_ACTION'=>array(
                   'val'=> $answer['NextAct'],
                   'type'=>2
               ),':ANS_ORDER' =>array(
                   'val'=>$this->getOrder(),
                   'type'=>1
               ),
               ':CT'=>array(
                   'val'=>date('Y-m-d H:i:s', time()),
                   'type'=>''
               )
           );
           $res = $this->DB->query($query, $params);
       }
    }
    protected function getOrder(){
        $query = "SELECT answer_order FROM sf_answers ORDER BY answer_order DESC  LIMIT 1 ";
        $res = $this->DB->query($query, array());
        if($res) return $res['answer_order']+1;
        return 1;
    }
    public function getAnswersListByQuestionId($question_id){
        $query = " SELECT * FROM sf_answers WHERE question_crypt = :QUESTION_CRYPT ORDER BY answer_order ";
        $params = array(
           ":QUESTION_CRYPT" => array('val'=>$question_id, 'type'=>2)
        );
        return $this->DB->query($query, $params, true);
    }
}

